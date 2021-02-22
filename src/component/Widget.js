import React from 'react';
import './widget.css';
const Widget = () => {
	return (
		<div className='widget'>
			<iframe
				src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com/raghav.kumar.102977%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide=cover=false&show_facepile=true&appId%2F&

tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide=cover=false&show_facepile=true&appId'
				width='340'
				height='100%'
				style={{ border: 'none', overflow: 'hidden' }}
				scrolling='no'
				frameBorder='0'
				allowTransparency='true'
				allow='encrypted-media'></iframe>
		</div>
	);
};

export default Widget;
