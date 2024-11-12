import React from 'react';
import { Card } from 'react-bootstrap';
import './Cities.css'
import { useNavigate } from 'react-router-dom'; 

const CityCard = ({ city }) => {

    const navigate = useNavigate(); 

    const handleCardClick = () => {
        navigate('/auth/plans' + `/${city.id}`);
    };

    return (
        <Card className="m-6 cityCard" onClick={handleCardClick} role='button' tabIndex={0}>
            <Card.Img  className="roundedImg"  variant="top" src={city.image} alt={city.name} />
            <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Text>{city.department}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CityCard;
