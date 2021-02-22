import React from 'react';
import './sidebarrow.css';
import { Avatar } from '@material-ui/core';
const SidebarReel = ({ src, title, Icon }) => {
	return (
		<div className='sidebarRow'>
			{src && <Avatar src={src} />}
			{Icon && <Icon />}
			<h4>{title}</h4>
		</div>
	);
};

export default SidebarReel;
