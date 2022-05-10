import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

const CharacterCard = (props) => {
	let [clicked, setClicked]=useState("");



	return (
		<Card onClick={props.onclick} className="mx-2 my-2" border={props.clicked} style={{ width: '19rem' }}>
			<Card.Img variant="top" src={props.imgsrc} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					{props.desc}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default CharacterCard
