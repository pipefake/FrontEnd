import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PlanLayout from '../components/touristPlan/PlanLayout'; // Asegúrate de importar el nuevo componente
import neiva from './neiva.jpg'; // Importa la imagen aquí para usarla en el PlanLayout
import Background from '../components/Backgorund/BackGround';
import './styles.css';
import { useLocation } from 'react-router-dom';

const Touristplans = () => {

    const location = useLocation();
    const cityName = location.state?.cityID;

    const [searchTerm, setSearchTerm] = useState('');

    const [activeTab, setActiveTab] = useState('hotels');

    //Buscador
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    //Cambiar de tap en la vista Hoteles/Cosas por hacer
    const handleSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };
    //listado de tours temporal
    const toursData = [
        {
            "location": "67301f2f75d9529b4c38738d",
            "name": "Plan Vereda upar",
            "description": "Luxury villa on the beach with private pool and ocean views.",
            "address": "123 Ocean Drive, Malibu, CA",
            "price": 500,
            "coverImage": "villa_beach.png",
            "images": ["villa1.png", "villa2.png", "villa3.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b1",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "67301f2f75d9529b4c38738d",
            "name": "Seaside Cottage",
            "description": "Cozy cottage by the sea, ideal for a romantic getaway.",
            "address": "987 Shore Lane, Malibu, CA",
            "price": 200,
            "coverImage": "cottage_seaside.png",
            "images": ["cottage1.png", "cottage2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b3",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b3",
            "name": "Mountain Cabin",
            "description": "A cozy cabin in the mountains with stunning views and a fireplace.",
            "address": "123 Alpine Road, Mountainview, CO",
            "price": 150,
            "coverImage": "cabin_image.png",
            "images": ["cabin1.png", "cabin2.png", "cabin3.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b4",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
    ];

    //listado de hoteles temporal
    const hotelsData = [
        {
            "location": "67301f2f75d9529b4c38738d",
            "name": "Beachfront Villa",
            "description": "Luxury villa on the beach with private pool and ocean views.",
            "address": "123 Ocean Drive, Malibu, CA",
            "price": 500,
            "coverImage": "villa_beach.png",
            "images": ["villa1.png", "villa2.png", "villa3.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b1",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "67301f2f75d9529b4c38738d",
            "name": "Seaside Cottage",
            "description": "Cozy cottage by the sea, ideal for a romantic getaway.",
            "address": "987 Shore Lane, Malibu, CA",
            "price": 200,
            "coverImage": "cottage_seaside.png",
            "images": ["cottage1.png", "cottage2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b3",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b3",
            "name": "Mountain Cabin",
            "description": "A cozy cabin in the mountains with stunning views and a fireplace.",
            "address": "123 Alpine Road, Mountainview, CO",
            "price": 150,
            "coverImage": "cabin_image.png",
            "images": ["cabin1.png", "cabin2.png", "cabin3.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b4",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b3",
            "name": "Mountain Lodge",
            "description": "Rustic lodge with panoramic mountain views and hiking trails nearby.",
            "address": "456 Pine Road, Mountainview, CO",
            "price": 175,
            "coverImage": "lodge_mountain.png",
            "images": ["lodge1.png", "lodge2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b5",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b4",
            "name": "City Apartment",
            "description": "Modern apartment in the heart of the city with skyline views.",
            "address": "789 Downtown St, New York, NY",
            "price": 300,
            "coverImage": "apartment_city.png",
            "images": ["apartment1.png", "apartment2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b6",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b4",
            "name": "Luxury Penthouse",
            "description": "Penthouse with private terrace and incredible city views.",
            "address": "1010 Fifth Ave, New York, NY",
            "price": 600,
            "coverImage": "penthouse_city.png",
            "images": ["penthouse1.png", "penthouse2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b7",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b5",
            "name": "Desert Oasis",
            "description": "Beautiful house with desert landscape views, ideal for relaxation.",
            "address": "123 Sand St, Phoenix, AZ",
            "price": 250,
            "coverImage": "desert_oasis.png",
            "images": ["oasis1.png", "oasis2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b8",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b5",
            "name": "Desert Villa",
            "description": "Luxury villa in the desert with a pool and breathtaking views.",
            "address": "456 Cactus Road, Phoenix, AZ",
            "price": 400,
            "coverImage": "villa_desert.png",
            "images": ["desertvilla1.png", "desertvilla2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b9",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b6",
            "name": "Countryside Cottage",
            "description": "Charming cottage in the countryside with garden views.",
            "address": "123 Green Way, Asheville, NC",
            "price": 180,
            "coverImage": "cottage_countryside.png",
            "images": ["countryside1.png", "countryside2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3b0",
            "createdAt": "2024-11-10T08:00:00.000Z"
        },
        {
            "location": "60b6c0e0f2a1c143d8d7f3b6",
            "name": "Farmhouse Retreat",
            "description": "Spacious farmhouse with nearby trails and lakes.",
            "address": "456 Maple Rd, Asheville, NC",
            "price": 220,
            "coverImage": "farmhouse_retreat.png",
            "images": ["farmhouse1.png", "farmhouse2.png"],
            "available": true,
            "createdBy": "60b6c0e0f2a1c143d8d7f3c1",
            "createdAt": "2024-11-10T08:00:00.000Z"
        }
    ];

    const hotelCity = hotelsData.filter(hotel => hotel.location.toLowerCase().includes(cityName));

    const planCity = hotelsData.filter(plan => plan.location.toLowerCase().includes(cityName));

    //Filtra con el buscador
    const filteredData = (activeTab === 'hotels' ? hotelsData : toursData).filter((item) =>
    item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)
);

return (
    <Container className="mt-5">
        <Background />
        <Container fixed="top">
            <h1 className="font-weight-bold text-center mb-4 display-1">¡Haz una reserva ahora mismo!</h1>
            <Row className="justify-content-center">
                <div style={{ height: "8px", width: "60%", backgroundColor: "#FFFFFF" }}></div>
                <div style={{ height: "8px", width: "60%", backgroundColor: "#007D00" }}></div>
                <div style={{ height: "8px", width: "60%", backgroundColor: "#FCDD09" }}></div>
            </Row>

            <Row className="mt-3 justify-content-center mb-4">
                <Col xs={10} md={6}>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Col>
            </Row>
        </Container>

        <Card>
            <Card.Header>
                <Nav variant="pills" defaultActiveKey="hotels" onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="hotels">Hoteles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="activities">Cosas que hacer</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body className="scroller">
                
                {activeTab === 'hotels' && (
                    <PlanLayout hotelsData={hotelCity} /> )}

                {activeTab === 'activities' && (
                    <PlanLayout hotelsData={filteredData} /> 
                )}
            </Card.Body>
        </Card>
    </Container>
);
};

export default Touristplans;