import React from 'react';
import logo from './assests/logo.png';
import './style.css';

export const Header = () => {
	return (
		<header>
			<a href="">HOMEPAGE</a>
			<a href="">ABOUT</a>
			<img src={logo} alt="a boba "></img>
			<a href="">STORE</a>
			<a href="">CONTACT</a>
		</header>
	);
};

export default Header;
