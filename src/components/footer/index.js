import React from 'react';
import './style.css';

export const Footer = () => {
	return (
		<footer className="snap-page-vertical">
			<section>footer</section>
			<div id="footer-gradient"></div>
			<svg
				id="footer-svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#ffe1e1"
					fill-opacity="1"
					d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,112C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
		</footer>
	);
};

export default Footer;
