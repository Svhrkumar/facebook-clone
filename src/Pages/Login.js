import React, { useState, useContext } from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { UserContext } from '../context/Context';
import { SET_USER } from '../context/action.type';
const Login = () => {
	const { state, dispatch } = useContext(UserContext);
	const { user } = state;
	const signin = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: SET_USER,
					user: result.user,
				});
				console.log('--->', result.user);
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className='login'>
			<div className='login__logo'>
				<img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' />
				<img src=' https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png' />
			</div>
			<Button className='button' type='submit' onClick={signin}>
				login
			</Button>
		</div>
	);
};

export default Login;
