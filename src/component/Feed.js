import React, { useState, useEffect } from 'react';
import './feed.css';
import StoryReel from './StoryReel';
import Messenger from './Messenger';
import { Post } from './Post';
import Widget from './Widget';
import db from '../firebase';
const Feed = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	return (
		<div className='feed'>
			<StoryReel />
			<Messenger />

			{posts.map((post) => (
				<Post
					key={post.id}
					profilePic={post.data.profilePic}
					message={post.data.message}
					timeStamp={post.data.timestamp}
					userName={post.data.username}
					image={post.data.image}
				/>
			))}

			<Widget />
		</div>
	);
};

export default Feed;
