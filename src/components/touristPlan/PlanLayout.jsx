import React from "react";
import { Row, Col, Button, Card } from 'react-bootstrap';

const PlanLayout = ({ hotelsData }) => { // Recibimos los datos como prop

    return (
        <Row>
            {hotelsData.map((hotel) => (
                <Col md={12} key={hotel.id} className="mb-4">
                    <Card className="d-flex flex-row">
                        <Card.Img
                            variant="left"
                            src={hotel.imageUrl} // Usamos la URL de la imagen recibida como prop
                            alt={hotel.name}
                            style={{ width: "200px", objectFit: "cover" }}
                        />
                        <Card.Body>
                            <Card.Title>{hotel.name}</Card.Title>
                            <Card.Text>{hotel.description}</Card.Text>
                            <Button variant="warning" className="mb-3">
                                Mostrar precios
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
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default PlanLayout;
