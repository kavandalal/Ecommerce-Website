import React from 'react';
import './aboutSection.css';
import { Button, Typography, Avatar } from '@material-ui/core';
const About = () => {
	// const visitGithub = (url) => {
	// 	console.log(url);
	// 	window.location = 'https://github.com/kavandalal';
	// };
	return (
		<div className='aboutSection'>
			<div></div>
			<div className='aboutSectionGradient'></div>
			<div className='aboutSectionContainer'>
				<Typography component='h1'>About Us</Typography>

				<div>
					<div className='about'>
						<p>
							<Avatar
								style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
								src='https://res.cloudinary.com/dkvftcbih/image/upload/v1636526918/avatar/kavan_xdyo73.jpg'
							/>
							<Typography>Kavan Dalal</Typography>
							<Button
								onClick={() =>
									window.open('https://github.com/kavandalal', '_blank')
								}
								color='primary'>
								Visit Github
							</Button>
						</p>
						<p>
							<Avatar
								style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
								src='https://res.cloudinary.com/dkvftcbih/image/upload/v1636526917/avatar/dhaval_u6cxqf.jpg'
							/>
							<Typography>Dhaval Birade</Typography>
							<Button
								onClick={() =>
									window.open('https://github.com/den864', '_blank')
								}
								color='primary'>
								Visit Github
							</Button>
						</p>
						<div className='content'>
							This system provides an easy solution for customers to buy the
							product without going to the shop and also for the shop owner to
							sell the product. This proposed system can be used by any naïve
							users and it does not require any educational level,experience or
							technical expertise in computer field but it will be of good use
							if user has the good knowledge of how to operate a computer
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
