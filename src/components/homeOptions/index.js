import React from 'react';
import facebook from './assets/facebook.png';
import './style.css';

export const HomeOptions = () => {
	return (
		<section id="home-options" className="snap-page-vertical">
			<h1 id="name">Luu's Cafe</h1>
			<section id="options-buttons">
				<a
					href="https://www.doordash.com/store/luu's-cafe-seattle-716170/?pickup=true&utm_campaign=gpa"
					target="_blank"
					rel="noreferrer"
				>
					<button>Menu</button>
				</a>
				<a href="">
					<button>Catering</button>
				</a>
				<a href="">
					<button>Contact</button>
				</a>
			</section>
			<h2 id="hours">Hours: Daily, 11AM-7PM</h2>
			{/* <a
				href="https://www.facebook.com/luuscafe/"
				target="_blank"
				rel="noreferrer"
			>
				<img id="facebook" src={facebook} alt="A facebook logo"></img>
			</a> */}
			<div id="home-options-gradient"></div>
			<div id="home-options-btm-gradient"></div>
			<svg
				id="options-svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#fef7dd"
					fill-opacity="1"
					d="M0,32L60,58.7C120,85,240,139,360,138.7C480,139,600,85,720,80C840,75,960,117,1080,144C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
				></path>
			</svg>
			<svg
				id="options-btm-svg"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#fef7dd"
					fill-opacity="1"
					d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,112C672,128,768,160,864,176C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>
		</section>
	);
};

export default HomeOptions;
