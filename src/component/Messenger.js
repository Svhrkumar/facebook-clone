import React, { useState, useContext } from 'react';
import './messenger.css';
import { Avatar } from '@material-ui/core';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { UserContext } from '../context/Context';
import firebase from 'firebase';
import db from '../firebase';

const Messenger = () => {
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const { state, dispatch } = useContext(UserContext);
	const { user } = state;
	const handleChange = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageUrl,
		});

		setInput('');
		setImageUrl('');
	};

	return (
		<div className='messenger'>
			<div className='messenger__top'>
				<Avatar src={user.photoURL} />
				<form>
					<input
						className='messenger__input'
						type='text'
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder={`what's on your mind ${user.displayName}`}
					/>
					<input
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						placeholder='Image URL (optional)'
					/>

					<button onClick={handleChange}>Hidden button</button>
				</form>
			</div>
			<div className='messenger__bottom'>
				<div className='messenger__option'>
					<VideocamIcon style={{ color: 'red' }} />
					<h3>Live Video</h3>
				</div>
				<div className='messenger__option'>
					<PhotoLibraryIcon style={{ color: 'green' }} />
					<h3>Photo/Video</h3>
				</div>
				<div className='messenger__option'>
					<InsertEmoticonIcon style={{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
};

export default Messenger;
