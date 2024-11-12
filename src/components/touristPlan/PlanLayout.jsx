import React, { useState } from "react";
import { Row, Col, Button, Card } from 'react-bootstrap';
import Reservation from '../Reservation/Reservation';
import DefaultPlaceImg from '../../assets/img/default_place.jpg';
import { useNavigate } from "react-router-dom";

const PlanLayout = ({ hotelsData }) => {
    const navigate = useNavigate();
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

    const handleGoToDetailTouristPlan = (idTouristPlan) => {
        navigate(`/auth/plan/detail/${idTouristPlan}`)
    }

    return (
        <Row>
            {hotelsData.map((hotel, index) => {
                const columNumber = index + 1;
                return <>
                    <Col md={6} key={hotel.id} className="mb-4">
                        <Card className="d-flex flex-row border-0 shadow-card rounded" 
                            role="button" tabIndex={0} onClick={() => handleGoToDetailTouristPlan(hotel._id)}
                            style={{height: '300px'}}>
                            <Card.Img
                                className="p-3 rounded"
                                variant="left"
                                src={hotel.coverImage === "default.png" ? DefaultPlaceImg : hotel.coverImage}
                                alt={hotel.name}
                                style={{ width: '50%', height: 'auto', objectFit: "contain" }}
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
                                            ⭐ 4.5 - 10 opiniones
                                        </span>
                                        <p>
                                            <strong>De {hotel.createdBy.name}</strong>
                                        </p>
                                        <p>$ {hotel.price}</p>
                                    </div>
                                </Card.Body>
                            )}
                        </Card>
                    </Col>
                    {columNumber === 2 && <div className=".w-100"/>}
                </>
            })}
        </Row>
    );
};

export default PlanLayout;
