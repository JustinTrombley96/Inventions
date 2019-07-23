import React from 'react';
import { Card, CardTitle, CardImg, CardBody, CardHeader } from 'shards-react';
import TooltipButton from './Tooltip';
import Metronome from './Metronome';
import '../../styling/Card.css'
const BasicCard = () => {
	return (
		<Card className='card' style={{ maxWidth: '400px' }}>
			<CardHeader className='cardHeader'>
			</CardHeader>
			<CardImg
				src='https://cdn.pixabay.com/photo/2010/12/13/10/11/box-2451_960_720.jpg'
				width='400'
				height='530px'
			/>
			<CardBody className='cardBody'>
				<CardTitle>Metronome</CardTitle>
				<Metronome />
				<TooltipButton />
			</CardBody>
			{/* <CardFooter>Card Footer</CardFooter> */}
		</Card>
	);
};
export default BasicCard;
