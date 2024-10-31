import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import neiva from './neiva.jpg';

const Touristplans = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('hotels');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };

    const hotelsData = [
        {
            id: 1,
            name: 'Masaya San Agustín',
            description: 'N.º 1 en relación calidad-precio de 129 lugares donde alojarse en San Agustín',
            imageUrl: 'https://example.com/image1.jpg',
            rating: 4.5,
            reviews: 139,
            reviewer: 'Tim C',
            reviewText: 'La habitación y la cama eran muy bonitas y la vista desde la terraza era espectacular. El bar y el restaurante también eran excelentes. Tenían una extensa y muy buena selección de vinos.',
        },
        {
            id: 1,
            name: 'Masaya San Agustín',
            description: 'N.º 1 en relación calidad-precio de 129 lugares donde alojarse en San Agustín',
            imageUrl: 'https://example.com/image1.jpg',
            rating: 4.5,
            reviews: 139,
            reviewer: 'Tim C',
            reviewText: 'La habitación y la cama eran muy bonitas y la vista desde la terraza era espectacular. El bar y el restaurante también eran excelentes. Tenían una extensa y muy buena selección de vinos.',
        },
        {
            id: 1,
            name: 'Masaya San Agustín',
            description: 'N.º 1 en relación calidad-precio de 129 lugares donde alojarse en San Agustín',
            imageUrl: 'https://example.com/image1.jpg',
            rating: 4.5,
            reviews: 139,
            reviewer: 'Tim C',
            reviewText: 'La habitación y la cama eran muy bonitas y la vista desde la terraza era espectacular. El bar y el restaurante también eran excelentes. Tenían una extensa y muy buena selección de vinos.',
        },
        // Agrega más objetos de hotel aquí si lo necesitas
    ];

    return (
        <Container className="mt-5">
            <Container fixed="top">
                {/* Título */}
                <h1 className="font-weight-bold text-center mb-4 display-1">Hoteles en el Departamento de Huila</h1>
                <Row className="justify-content-center">
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#FFFFFF" }}></div>
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#007D00" }}></div>
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#FCDD09" }}></div>
                </Row>

                {/* Barra de búsqueda */}
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

            {/* Navegación de pestañas */}
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
                <Card.Body>
                    {activeTab === 'hotels' && (
                        <>
                            
                            <Row>
                                {hotelsData.map(hotel => (
                                    <Col md={12} key={hotel.id} className="mb-4">
                                        <Card className="d-flex flex-row">
                                            <Card.Img 
                                                variant="left" 
                                                src={neiva}
                                                alt={hotel.name} 
                                                style={{ width: '200px', objectFit: 'cover' }}
                                            />
                                            <Card.Body>
                                                <Card.Title>{hotel.name}</Card.Title>
                                                <Card.Text>{hotel.description}</Card.Text>
                                                <Button variant="warning" className="mb-3">Mostrar precios</Button>
                                                <div>
                                                    <span>⭐ {hotel.rating} - {hotel.reviews} opiniones</span>
                                                    <p><strong>De {hotel.reviewer}</strong></p>
                                                    <p>"{hotel.reviewText}"</p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </>
                    )}
                    {activeTab === 'activities' && (
                        <>
                            <Card.Title>Cosas que hacer</Card.Title>
                            <Card.Text>Aquí hay algunas actividades recomendadas.</Card.Text>
                            <Button variant="primary">Ver más actividades</Button>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Touristplans;
