import React from 'react';
import Footer from '../../components/footer';
import HomeMain from '../../components/homeMain';
import HomeOptions from '../../components/homeOptions';
import './style.css';

export const Homepage = () => {
	return (
		<section className="snap-container-vertical">
			<HomeMain />
			<HomeOptions />
			<Footer />
		</section>
	);
};

export default Homepage;
