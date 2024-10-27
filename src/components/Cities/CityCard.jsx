import React from 'react';
import { Card } from 'react-bootstrap';
import neiva from './neiva.jpg';
import './Cities.css'

const CityCard = ({ city }) => {
    return (
        <Card className="m-6 cityCard">
            <Card.Img  className="roundedImg"  variant="top" src={neiva} alt={city.name} />
            <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>{city.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CityCard;
