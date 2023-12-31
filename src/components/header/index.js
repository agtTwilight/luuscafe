import React, { useEffect } from 'react';
import logo from './assets/logo.png';
import './style.css';

export const Header = () => {
	useEffect(() => {
		document
			.querySelector('.snap-container-vertical')
			.addEventListener('scroll', () => {
				const home = document
					.querySelector('#home-main')
					.getBoundingClientRect();
				const header = document.querySelector('#header');
				if (home.y !== window.scrollY) {
					header.setAttribute('style', 'opacity: 0;');
				} else {
					header.setAttribute('style', 'opacity: 1;');
				}
			});
	}, []);

	return (
		<header id="header">
			<a href="">HOMEPAGE</a>
			<a href="">ABOUT</a>
			<img src={logo} alt="a boba "></img>
			<a
				href="https://food.google.com/chooseprovider?restaurantId=/g/11j0nmq7xy&g2lbs=ADZRdkvRcf6ouRK7TLeDfiFe_4wgUCdtodgSu0jQpnTgdjWR5nFCfhcmv61b3Hw9exYnMtI5ejLDmP8eEzCiltXc_GkIMlZvtC8e6AO-uN0skm7QhEQyQHE%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=PoWHZOuROoWw0PEPkfCk2Ag&ei=PoWHZOuROoWw0PEPkfCk2Ag&fo_s=OA&sei=CVlccFIv95KfEWdd80YfQ8m-&utm_campaign&utm_source=search"
				target="_blank"
				rel="noreferrer"
			>
				ORDER
			</a>
			<a href="">CONTACT</a>
		</header>
	);
};

export default Header;
