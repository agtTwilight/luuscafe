import React from 'react';
import location from './assets/location.png';
import './style.css';

export const HomeMain = () => {
	return (
		<section id="home-main" className="snap-page-vertical">
			<a href="https://www.google.com/maps/place/Luu%E2%80%99s+Cafe/@47.6809142,-122.3973044,11.92z/data=!4m6!3m5!1s0x5490130da11d2ceb:0x7ae6a98741809a99!8m2!3d47.6903119!4d-122.2911529!16s%2Fg%2F11j0nmq7xy?entry=ttu">
				<img
					id="map-location"
					src={location}
					alt="a map showing Luu's cafe location in Seattle"
				></img>
			</a>
			<section className="snap-container-horizontal">
				<div className="snap-page-horizontal">
					<h1>Menu</h1>
				</div>
				<div className="snap-page-horizontal">
					<h1>Facebook</h1>
				</div>
				<div className="snap-page-horizontal">
					<h1></h1>
				</div>
			</section>
		</section>
	);
};

export default HomeMain;
