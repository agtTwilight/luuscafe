import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import './style.css';

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		// TODO add .env file
		emailjs
			.sendForm(
				'service_zo7n8zv',
				'template_3qonnuo',
				form.current,
				'qAGcWm6fIZZLN4Dsa'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const refOne = useRef(null);
	return (
		<section id="contact">
			<section id="form-ref" ref={refOne}>
				<form id="contactForm" ref={form} onSubmit={sendEmail}>
					<section id="contactTop">
						<h2>Send us a message</h2>
						<p>For general and catering questions</p>
					</section>
					<section id="contactInputs">
						<input
							id="name"
							type="text"
							name="user_name"
							placeholder="Your Name"
						/>
						<input
							id="email"
							type="email"
							name="user_email"
							placeholder="Your Email"
						/>
						<textarea id="message" name="message" placeholder="Your Message" />
					</section>
					<input id="contactBtn" type="submit" value="Send" />
				</form>
			</section>
		</section>
	);
};

export default Contact;
