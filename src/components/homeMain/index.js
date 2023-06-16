import React, { useState } from 'react';
import left from './assets/left.png';
import location from './assets/location.png';
import right from './assets/right.png';
import './style.css';

export const HomeMain = () => {
	const [slide, setSlide] = useState(0);

	const nextSlide = () => {
		if (slide !== 3) {
			const carousel = document.querySelector(
				'.snap-container-horizontal'
			).children;

			const nav = document.querySelector('#carousel-nav').children;

			carousel[slide].classList.add('hide-carousel');
			nav[slide].classList.remove('active-nav');
			nav[slide + 1].classList.add('active-nav');

			setSlide(slide + 1);
		}
	};

	const perviousSlide = () => {
		if (slide !== 0) {
			const carousel = document.querySelector(
				'.snap-container-horizontal'
			).children;

			const nav = document.querySelector('#carousel-nav').children;

			carousel[slide - 1].classList.remove('hide-carousel');
			nav[slide].classList.remove('active-nav');
			nav[slide - 1].classList.add('active-nav');

			setSlide(slide - 1);
		}
	};

	const handleNavClick = (e) => {
		if (!e.target.classList.length) {
			const target = e.target.id.slice(-1) - 1;
			const carousel = document.querySelector(
				'.snap-container-horizontal'
			).children;
			const nav = document.querySelector('#carousel-nav').children;

			if (target > slide) {
				for (let i = 0; i < target; i++) {
					carousel[i].classList.add('hide-carousel');
					nav[i].classList.remove('active-nav');
				}
			} else {
				for (let i = slide; i > target - 1; i--) {
					carousel[i].classList.remove('hide-carousel');
					nav[i].classList.remove('active-nav');
				}
			}

			nav[target].classList.add('active-nav');
			setSlide(target);
		}
	};

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
			<section id="carousel">
				<img
					id="carousel-left"
					onClick={perviousSlide}
					src={left}
					alt="a left arrow"
				></img>
				<section className="snap-container-horizontal">
					<div id="carousel-1" className="snap-page-horizontal">
						<h1>About</h1>
						<p>Luu's Cafe serves boba, sandwiches, and desserts</p>
					</div>
					<div id="carousel-2" className="snap-page-horizontal">
						<h1>Menu</h1>
						<p>Check out our menu here</p>
					</div>
					<div id="carousel-3" className="snap-page-horizontal">
						<h1>Catering</h1>
						<p>Schedule catering here</p>
					</div>
					<div id="carousel-4" className="snap-page-horizontal">
						<h1>Facebook</h1>
						<p>Keep up with us on Facebook!</p>
					</div>
				</section>
				<img
					id="carousel-right"
					onClick={nextSlide}
					src={right}
					alt="a right arrow"
				></img>
				<div id="carousel-nav">
					<button
						id="nav-1"
						className="active-nav"
						onClick={handleNavClick}
					></button>
					<button id="nav-2" onClick={handleNavClick}></button>
					<button id="nav-3" onClick={handleNavClick}></button>
					<button id="nav-4" onClick={handleNavClick}></button>
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
