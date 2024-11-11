import React, { useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import Background from '../components/Backgorund/BackGround';

export const Reservas = () => {
    const reservationsData = [
        {
            user_id: "60b6c0e0f2a1c143d8d7f3b7",
            tourist_plans_id: "67301f2f75d9529b4c38738d",
            checkIn: "2024-11-15T14:00:00.000Z",
            checkOut: "2024-11-20T10:00:00.000Z",
            status: "Confirmed",
            created_at: "2024-11-01T08:00:00.000Z"
        },
        {
            user_id: "60b6c0e0f2a1c143d8d7f3b8",
            tourist_plans_id: "60b6c0e0f2a1c143d8d7f3b4",
            checkIn: "2024-12-05T14:00:00.000Z",
            checkOut: "2024-12-10T10:00:00.000Z",
            status: "Pending",
            created_at: "2024-11-05T08:00:00.000Z"
        },
        {
            user_id: "60b6c0e0f2a1c143d8d7f3b9",
            tourist_plans_id: "60b6c0e0f2a1c143d8d7f3b3",
            checkIn: "2024-12-15T14:00:00.000Z",
            checkOut: "2024-12-20T10:00:00.000Z",
            status: "Cancelled",
            created_at: "2024-11-10T08:00:00.000Z"
        }
    ];

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
                                <Card.Subtitle className="mb-2 text-muted">User ID: {reservation.user_id}</Card.Subtitle>
                                <Card.Text><strong>Plan ID:</strong> {reservation.tourist_plans_id}</Card.Text>
                                <Card.Text><strong>Check-In:</strong> {new Date(reservation.checkIn).toLocaleDateString()}</Card.Text>
                                <Card.Text><strong>Check-Out:</strong> {new Date(reservation.checkOut).toLocaleDateString()}</Card.Text>
                                <Card.Text><strong>Status:</strong> {reservation.status}</Card.Text>
                                <Card.Text><strong>Created At:</strong> {new Date(reservation.created_at).toLocaleDateString()}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
