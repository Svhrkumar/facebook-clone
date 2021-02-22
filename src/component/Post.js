import React, { useContext } from 'react';
import './post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { UserContext } from '../context/Context';

export const Post = ({ profilePic, image, userName, timeStamp, message }) => {
	const { state, dispatch } = useContext(UserContext);
	const { user } = state;
	return (
		<div className='post'>
			<div className='post__top'>
				<Avatar className='post__avatar' src={profilePic} />
				<div className='post__info'>
					<h3>{userName}</h3>
					<p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
				</div>
			</div>
			<div className='post__bottom'>
				<p>{message}</p>
			</div>
			<div className='post__image'>
				<img src={image} alt='' />
			</div>
			<div className='post__options'>
				<div className='post__option'>
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div className='post__option'>
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>

				<div className='post__option'>
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div className='post__option'>
					<AccountCircleIcon />
					<ExpandMoreIcon />
				</div>
			</div>
		</div>
	);
};
