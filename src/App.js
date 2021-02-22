import React, { useContext, useReducer } from 'react';

import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed';
import Widget from './component/Widget';
import Login from './Pages/Login';
import { UserContext } from './context/Context';
import reducer from './context/reducer';

const initialState = {
	user: null,
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { user } = state;
	return (
		<UserContext.Provider value={{ state, dispatch }}>
			<div className='app'>
				{!user ? (
					<>
						<Login />
					</>
				) : (
					<>
						<Navbar />
						<div className='app__body'>
							<Sidebar />
							<Feed />
							<Widget />
						</div>
					</>
				)}
			</div>
		</UserContext.Provider>
	);
}

export default App;
