import React, { useContext } from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { UserContext } from '../context/Context';

const Sidebar = () => {
	const { state, dispatch } = useContext(UserContext);
	const { user } = state;
	return (
		<div className='sidebar'>
			<SidebarRow src={user.photoURL} title={user.displayName} />
			<SidebarRow
				title='COVID-19 Information Center'
				Icon={LocalHospitalIcon}
			/>
			<SidebarRow title='pages' Icon={EmojiFlagsIcon} />
			<SidebarRow title='Friends' Icon={PeopleIcon} />
			<SidebarRow title='Mssages' Icon={ChatIcon} />
			<SidebarRow title='Market Place' Icon={StorefrontIcon} />
			<SidebarRow title='Videos' Icon={VideoLibraryIcon} />
			<SidebarRow Icon={ExpandMoreOutlinedIcon} />
		</div>
	);
};

export default Sidebar;
