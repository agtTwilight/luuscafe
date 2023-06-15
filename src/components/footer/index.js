import React from 'react';
import facebook from './assets/facebook.png';
import './style.css';

export const Footer = () => {
	return (
		<footer className="snap-page-vertical">
			<section id="footer">
				<section id="footer-left">
					<h2>Address</h2>
					<p>
						8507 35th Ave NE <br></br>Seattle, WA 98115
					</p>
					<h2>Hours</h2>
					<p>
						<strong>Monday - Sunday</strong>
						<br></br>11:00 am - 7:00 pm
					</p>
					<h2>Phone</h2>
					<p>(206) 946-6778</p>
					<img
						id="facebook-footer"
						src={facebook}
						alt="the facebook logo"
					></img>
				</section>
				<section id="footer-right"></section>
				<hr></hr>
			</section>
		</footer>
	);
};

export default Footer;
