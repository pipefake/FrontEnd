import React, { useState, useEffect } from 'react';
import { useForm } from "../hooks/useForm";
import { Container, Row, Button, Form, Card } from 'react-bootstrap';
import Background from '../components/Backgorund/BackGround';

export const Publicar = () => {
    const { form, changed } = useForm({});
    const [loadingForm, setLoadingForm] = useState(false);
    const [fetchedPlans, setFetchedPlans] = useState([]);
    const [showForm, setShowForm] = useState(false);

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
        }
    ];
    

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const response = await fetch('http://localhost:3002/api/plans');
            if (!response.ok) throw new Error('Error fetching plans');
            const plans = await response.json();
            setFetchedPlans(plans);
        } catch (error) {
            console.error('Error fetching plans:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingForm(true);
        try {
            const response = await fetch('http://localhost:3002/api/plans', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            if (!response.ok) throw new Error('Error submitting the plan');
            const newPlan = await response.json();
            setFetchedPlans([...fetchedPlans, newPlan]);
            setShowForm(false);
        } catch (error) {
            console.error('Error submitting the plan:', error);
        } finally {
            setLoadingForm(false);
        }
    };

    return (
        <div>
            <Background />
            <Container>
                <h1 className="font-weight-bold text-center mb-4 display-3">Publica tus planes turísticos</h1>
                <Row className="justify-content-center">
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#FFFFFF" }}></div>
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#007D00" }}></div>
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#FCDD09" }}></div>
                </Row>
            </Container>

            <Container className="mt-4">
                <Button variant="success" onClick={() => setShowForm(!showForm)} className="mb-3">
                    {showForm ? 'Cancelar' : '+ Agregar nuevo plan'}
                </Button>

                {showForm ? (
                    <Form onSubmit={handleSubmit} className="mb-4">
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                onChange={changed}
                                value={form.name || ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicLocation">
                            <Form.Label>Locación</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                placeholder="Locación"
                                onChange={changed}
                                value={form.location || ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicDescription" className="mt-3">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                placeholder="Descripción"
                                onChange={changed}
                                value={form.description || ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicAddress" className="mt-3">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                placeholder="Dirección"
                                onChange={changed}
                                value={form.address || ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPrice" className="mt-3">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                placeholder="Precio"
                                onChange={changed}
                                value={form.price || ''}
                                required
                            />
                        </Form.Group>
                        <Button
                            disabled={loadingForm}
                            variant="primary"
                            type="submit"
                            className="mt-3 w-100"
                        >
                            {loadingForm ? 'Loading...' : 'Ingresar'}
                        </Button>
                    </Form>
                ) : (
                    <Row>
                        {hotelsData.map((plan, index) => (
                            <Card key={index} className="mb-3 w-100">
                                <Card.Body>
                                    <Card.Title>{plan.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{plan.location}</Card.Subtitle>
                                    <Card.Text>{plan.description}</Card.Text>
                                    <Card.Text><strong>Dirección:</strong> {plan.address}</Card.Text>
                                    <Card.Text><strong>Precio:</strong> ${plan.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
};
