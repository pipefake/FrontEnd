import React from 'react';
import { Card } from 'react-bootstrap';
import neiva from './neiva.jpg';
import './Cities.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const CityCard = ({ city }) => {

    const navigate = useNavigate(); 

    const handleCardClick = () => {
        navigate('/plans', { state: { cityID: city._id } });
    };

    return (
        <Card className="m-6 cityCard" onClick={handleCardClick}>
            <Card.Img  className="roundedImg"  variant="top" src={neiva} alt={city.name} />
            <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>{city.description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CityCard;
