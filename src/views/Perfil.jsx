import React, { useState, useEffect } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Background from '../components/Backgorund/Background';
import { Lines } from '../components/Lines';
import { Global } from '../helpers/Global';

export const Perfil = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('Token'));


    const getProfile = async () => {
        try {
            const response = await fetch(`${Global.url}/users/profile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Error al obtener el perfil');
            }

            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Hubo un problema con la petición:', error);
            setError('Hubo un problema con la petición');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getProfile();
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
                <Lines/>
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
                        <Form.Control type="text" value={userData.roles} readOnly />
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
