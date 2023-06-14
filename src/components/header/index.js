import React from 'react';
import logo from './assests/logo.png';
import './style.css';

export const Header = () => {
	return (
		<header>
			<a href="">HOMEPAGE</a>
			<a href="">ABOUT</a>
			<img src={logo} alt="a boba "></img>
			<a href="https://food.google.com/chooseprovider?restaurantId=/g/11j0nmq7xy&g2lbs=ADZRdkvRcf6ouRK7TLeDfiFe_4wgUCdtodgSu0jQpnTgdjWR5nFCfhcmv61b3Hw9exYnMtI5ejLDmP8eEzCiltXc_GkIMlZvtC8e6AO-uN0skm7QhEQyQHE%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=PoWHZOuROoWw0PEPkfCk2Ag&ei=PoWHZOuROoWw0PEPkfCk2Ag&fo_s=OA&sei=CVlccFIv95KfEWdd80YfQ8m-&utm_campaign&utm_source=search">
				ORDER
			</a>
			<a href="">CONTACT</a>
		</header>
	);
};

export default Header;
