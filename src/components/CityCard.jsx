import React from 'react';
import { Card } from 'react-bootstrap';

const CityCard = ({ city }) => {
    return (
        <Card>
            <Card.Img variant="top" src={city.image} alt={city.name} />
            <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>{city.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CityCard;
