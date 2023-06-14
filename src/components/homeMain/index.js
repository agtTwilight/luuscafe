import React from 'react';
import location from './assets/location.png';
import './style.css';

export const HomeMain = () => {
	return (
		<section id="home-main" className="snap-page-vertical">
			<a
				id="map-a"
				href="https://www.google.com/maps/place/Luu%E2%80%99s+Cafe/@47.6809142,-122.3973044,11.92z/data=!4m6!3m5!1s0x5490130da11d2ceb:0x7ae6a98741809a99!8m2!3d47.6903119!4d-122.2911529!16s%2Fg%2F11j0nmq7xy?entry=ttu"
			>
				<img
					id="map-location"
					src={location}
					alt="a map showing Luu's cafe location in Seattle"
				></img>
			</a>
			<section className="snap-container-horizontal">
				<div className="snap-page-horizontal">
					<h1>About</h1>
					<p>Luu's Cafe serves boba, sandwiches, and desserts</p>
				</div>
				<div className="snap-page-horizontal">
					<h1>Menu</h1>
					<p>Check out our menu here</p>
				</div>
				<div className="snap-page-horizontal">
					<h1>Catering</h1>
					<p>Schedule catering here</p>
				</div>
				<div className="snap-page-horizontal">
					<h1>Facebook</h1>
					<p>Keep up with us on Facebook!</p>
				</div>
			</section>
			<div id="home-main-gradient"></div>
			<svg
				id="home-svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#fef7dd"
					fill-opacity="1"
					d="M0,64L80,85.3C160,107,320,149,480,149.3C640,149,800,107,960,101.3C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
				></path>
			</svg>
		</section>
	);
};

export default HomeMain;
