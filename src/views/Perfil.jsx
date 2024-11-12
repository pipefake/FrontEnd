import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import Background from '../components/Backgorund/Background';


const fetchUserData = async () => {
    return {
        name: "John",
        lastName: "Doe",
        nick: "johndoe123",
        email: "john@example.com",
        phoneNumber: "123456789",
        image: "profile_pic.png",
        roles: ["CLIENT"],
    };
};

export const Perfil = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await fetchUserData();
                setUserData(data);
            } catch (error) {
                console.error("Error al cargar datos del usuario:", error);
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    }, []);

    if (loading) {
        return <p>Cargando perfil...</p>;
    }

    return (
        <>
            <Background />
            <Container>
                {/* Título */}
                <h1 className="font-weight-bold text-center mb-4 display-3">Perfil de Usuario</h1>
                <Row className="justify-content-center">
                    <Row style={{ height: "8px", width: "60%", backgroundColor: "#FFFFFF" }}></Row>
                    <Row style={{ height: "8px", width: "60%", backgroundColor: "#007D00" }}></Row>
                    <Row style={{ height: "8px", width: "60%", backgroundColor: "#FCDD09" }}></Row>
                </Row>
            </Container>
            <Container className="formPublication mt-4">
                <Form>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={userData.name || ''} readOnly />
                    </Form.Group>
                    <Form.Group controlId="formUserLastName" className="mt-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" value={userData.lastName || ''} readOnly />
                    </Form.Group>
                    <Form.Group controlId="formUserNick" className="mt-3">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="text" value={userData.nick || ''} readOnly />
                    </Form.Group>
                    <Form.Group controlId="formUserEmail" className="mt-3">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" value={userData.email || ''} readOnly />
                    </Form.Group>
                    <Form.Group controlId="formUserPhone" className="mt-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="text" value={userData.phoneNumber || 'No especificado'} readOnly />
                    </Form.Group>
                    <Form.Group controlId="formUserRoles" className="mt-3">
                        <Form.Label>Roles</Form.Label>
                        <Form.Control type="text" value={userData.roles.join(', ')} readOnly />
                    </Form.Group>
                    <Button variant="primary" className="mt-3 w-100">
                        Editar Perfil
                    </Button>
                </Form>
            </Container>
        </>
    );
};

export default Perfil;
