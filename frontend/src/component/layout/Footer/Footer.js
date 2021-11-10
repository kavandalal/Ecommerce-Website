import React from 'react';
import playStore from '../../../images/playstore.png';
import './Footer.css';

const Footer = () => {
	return (
		<footer id='footer'>
			<div className='leftFooter'>
				{/* <h4>DOWNLOAD OUR APP</h4> */}
				<p>Download App for Android mobile phone</p>
				<img src={playStore} alt='playstore' />
			</div>

			<div className='midFooter'>
				<h1>Shopping Jugad</h1>
				<p>High Quality is our first priority</p>

				<p>Copyrights &copy; 2021</p>
			</div>
		</footer>
	);
};

export default Footer;
