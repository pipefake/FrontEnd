import React, { useState } from "react";
import { Row, Col, Button, Card } from 'react-bootstrap';
import Reservation from '../Reservation/Reservation';

const PlanLayout = ({ hotelsData }) => {
    const [selectedHotelId, setSelectedHotelId] = useState(null);

    
    const handleReservationStatus = (status) => {
        if (status === true) {
            console.log('Reservation Confirmed');
        } else {
            console.log('Reservation Cancelled');
        }
        setSelectedHotelId(null); // 
    };

    const handleCardClick = (hotelId) => {
        setSelectedHotelId(hotelId); 
    };

    return (
        <Row>
            {hotelsData.map((hotel) => (
                <Col md={12} key={hotel._id} className="mb-4">
                    <Card className="d-flex flex-row">
                        <Card.Img
                            variant="left"
                            src={hotel.imageUrl}
                            alt={hotel.name}
                            style={{ width: "200px", objectFit: "cover" }}
                        />
                        {selectedHotelId === hotel.id ? (
                            <div className="reservation-overlay">
                                <Reservation 
                                    hotel={hotel} 
                                    onCancel={() => handleReservationStatus(false)}
                                />
                            </div>
                        ) : (
                            <Card.Body>
                                <Card.Title>{hotel.name}</Card.Title>
                                <Card.Text>{hotel.description}</Card.Text>
                                <Button variant="success" onClick={() => handleCardClick(hotel.id)} className="mb-3">
                                    Reservar
                                </Button>
                                <div>
                                    <span>
                                        ⭐ {hotel.rating} - {hotel.reviews} opiniones
                                    </span>
                                    <p>
                                        <strong>De {hotel.reviewer}</strong>
                                    </p>
                                    <p>"{hotel.reviewText}"</p>
                                </div>
                            </Card.Body>
                        )}
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default PlanLayout;
