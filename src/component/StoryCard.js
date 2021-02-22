import React from 'react';
import { Avatar } from '@material-ui/core';
import './storycard.css';
const StoryCard = ({ image, profileSrc, title }) => {
	return (
		<div className='storycard' style={{ backgroundImage: `url(${image})` }}>
			<Avatar className='storycard__ava' src={profileSrc} />
			<h4>{title}</h4>
		</div>
	);
};

export default StoryCard;
