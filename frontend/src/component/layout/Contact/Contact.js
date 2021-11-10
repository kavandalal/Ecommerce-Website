import React from 'react';
import './Contact.css';
import { Button } from '@material-ui/core';

const Contact = () => {
	return (
		<div className='contactContainer'>
			<a className='mailBtn' href='mailto:kavandalal003@gmail.com'>
				<Button
					onClick={() =>
						window.open('https://www.linkedin.com/in/kavan-dalal/', '_blank')
					}>
					Contact: kavandalal003@gmail.com
				</Button>
			</a>
			<a className='mailBtn' href='mailto:nsnszjz@gmail.com'>
				<Button
					onClick={() =>
						window.open(
							'https://www.linkedin.com/in/dhaval-birade-5500b01b1/',
							'_blank'
						)
					}>
					Contact: nsnszjz@gmail.com
				</Button>
			</a>
		</div>
	);
};

export default Contact;
