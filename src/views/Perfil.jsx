import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Background from '../components/Backgorund/Background';
import { Lines } from '../components/Lines';
import { Global } from '../helpers/Global';
import useAuth from '../hooks/useAuth';

export const Perfil = () => {
    const { auth } = useAuth();
    const [token, setToken] = useState(localStorage.getItem('Token'));

    // Inicializar el estado con los datos del usuario de 'auth'
    const [userData, setUserData] = useState({
        name: auth.name || '',
        lastName: auth.lastName || '',
        nick: auth.nick || '',
        email: auth.email || '',
        phoneNumber: auth.phoneNumber || '',
        roles: auth.roles || [],
    });

    const [isEditing, setIsEditing] = useState(false);

    // Manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Guardar los cambios del perfil
    const handleSave = async () => {
        try {
            const response = await fetch(`${Global.url}/users/user`, {
                method: 'PUT',  // Usamos PUT para la actualización
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,  // Asegúrate de que el token se esté pasando correctamente
                },
                body: JSON.stringify(userData), 
            });

            if (response.ok) {
                const updatedData = await response.json();
                setUserData(updatedData);
                setIsEditing(true);
                alert('Perfil actualizado con éxito');
            } else {
                console.error('Error al actualizar el perfil');
                const errorText = await response.text();
                console.log('Respuesta del servidor:', errorText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <>
            <Background />
            <Container>
                <h1 className="font-weight-bold text-center mb-4 display-3">Perfil de Usuario</h1>
                <Lines />
            </Container>
            <Container className="formPublication mt-4">
                <Form>
                    <Form.Group controlId="formUserName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={userData.name}
                            readOnly={!isEditing}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserLastName" className="mt-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={userData.lastName}
                            readOnly={!isEditing}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserNick" className="mt-3">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            name="nick"
                            value={userData.nick}
                            readOnly={!isEditing}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserEmail" className="mt-3">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={userData.email}
                            readOnly={!isEditing}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserPhone" className="mt-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="text"
                            name="phoneNumber"
                            value={userData.phoneNumber || ''}
                            readOnly={!isEditing}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formUserRoles" className="mt-3">
                        <Form.Label>Roles</Form.Label>
                        <Form.Control
                            type="text"
                            name="roles"
                            value={userData.roles.join(', ')}
                            readOnly
                        />
                    </Form.Group>
                    {isEditing ? (
                        <Button variant="success" className="mt-3 w-100" onClick={handleSave}>
                            Guardar Cambios
                        </Button>
                    ) : (
                        <Button variant="primary" className="mt-3 w-100" onClick={() => setIsEditing(true)}>
                            Editar Perfil
                        </Button>
                    )}
                </Form>
            </Container>
        </>
    );
};

export default Perfil;
