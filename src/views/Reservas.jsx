import React, { useState, useEffect } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import Background from '../components/Backgorund/Background';
import { Global } from '../helpers/Global';

export const Reservas = () => {
    // Estados para manejar las reservas, la carga y errores
    const [token, setToken] = useState(localStorage.getItem('Token'));
    const [reservationsData, setReservationsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener las reservas desde el endpoint
    const getReservations = async () => {
        try {
            const response = await fetch(`${Global.url}/reservations/get_by_client`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener las reservas');
            }

            const data = await response.json();
            setReservationsData(data);
        } catch (error) {
            console.error('Hubo un problema con la petición:', error);
            setError('Hubo un problema con la petición');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getReservations();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Background />
            <Container>
                <h1 className="font-weight-bold text-center mb-4 display-3">Reservas de Usuario</h1>
                <Row className="justify-content-center">
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#FFFFFF" }}></div>
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#007D00" }}></div>
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#FCDD09" }}></div>
                </Row>
            </Container>

            <Container className="mt-4">
                <Row>
                    {reservationsData.map((reservation, index) => (
                        <Card key={index} className="mb-3 w-100">
                            <Card.Body>
                                <Card.Title>Reservation #{index + 1}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Plan reservado: {reservation.touristPlan.name}</Card.Subtitle>
                                <Card.Text><strong>Usuario:</strong> {reservation.user.name}</Card.Text>
                                <Card.Text><strong>Check-In:</strong> {new Date(reservation.checkIn).toLocaleDateString()}</Card.Text>
                                <Card.Text><strong>Check-Out:</strong> {new Date(reservation.checkOut).toLocaleDateString()}</Card.Text>
                                <Card.Text><strong>Created At:</strong> {new Date(reservation.createdAt).toLocaleDateString()}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        </div>
    );
};


