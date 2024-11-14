import React, { useState, useEffect } from 'react';
import { useForm } from "../hooks/useForm";
import { Container, Row, Button, Form, Card } from 'react-bootstrap';
import Background from '../components/Backgorund/Background';
import { Lines } from '../components/Lines';
import { Global } from '../helpers/Global';

export const Publicar = () => {
    const { form, changed } = useForm({});
    const [loadingForm, setLoadingForm] = useState(false);
    const [fetchedPlans, setFetchedPlans] = useState([]);
    const [hotelsData, setHotelsData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const token = localStorage.getItem('Token');

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        try {
            const response = await fetch(`${Global.url}/touristPlans`);
            if (!response.ok) throw new Error('Error fetching plans');
            const plans = await response.json();
            setHotelsData(plans);
        } catch (error) {
            console.error('Error fetching plans:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoadingForm(true);
        try {
            const requestBody = {
                ...form,
                coverImage: form.coverImage,
                images: [],
                available: true,
            };

            const response = await fetch(`${Global.url}/touristPlans/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(requestBody)
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
        <>
            <Background />
            <Container>
                <h1 className="font-weight-bold text-center mb-4 display-3">Publica tus planes turísticos</h1>
                <Lines />
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

                        <Form.Group controlId="formBasicLocationName">
                            <Form.Label>Nombre de la ubicación</Form.Label>
                            <Form.Control
                                type="text"
                                name="location.name"
                                placeholder="Nombre de la ubicación"
                                onChange={changed}
                                value={form.location?.name || ''}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicLocationDescription">
                            <Form.Label>Descripción de la ubicación</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="location.description"
                                placeholder="Descripción de la ubicación"
                                onChange={changed}
                                value={form.location?.description || ''}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="number"
                                name="location.city"
                                placeholder="Ciudad"
                                onChange={changed}
                                value={form.location?.city || ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicLat">
                            <Form.Label>Latitud</Form.Label>
                            <Form.Control
                                type="number"
                                name="location.lat"
                                placeholder="Latitud"
                                onChange={changed}
                                value={form.location?.lat || ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicLon">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control
                                type="number"
                                name="location.lon"
                                placeholder="Longitud"
                                onChange={changed}
                                value={form.location?.lon || ''}
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
                        {hotelsData.map((hotel, index) => (
                            <Card key={index} className="mb-3 w-100">
                                <Card.Img variant="top" src={hotel.coverImage} alt={hotel.name} />
                                <Card.Body>
                                    <Card.Title>{hotel.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{hotel.location.city.name}</Card.Subtitle>
                                    <Card.Text>{hotel.description}</Card.Text>
                                    <Card.Text><strong>Dirección:</strong> {hotel.address}</Card.Text>
                                    <Card.Text><strong>Precio:</strong> ${hotel.price}</Card.Text>
                                    <Card.Text><strong>Ubicación:</strong> {hotel.location.name} - {hotel.location.description}</Card.Text>
                                    <Card.Text><strong>Ciudad:</strong> {hotel.location.city.name}, {hotel.location.city.department}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                )}
            </Container>
        </>
    );
}
