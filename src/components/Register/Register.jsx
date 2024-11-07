import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import './Register.css';
import { Global } from '../../helpers/Global';

const Register = () => {

    // Usar el hook personalizado useForm para cargar los datos del formulario
    const { form, changed } = useForm({});

    // Estado para mostrar el resultado del registro del user en la BD
    const [saved, setSaved] = useState("not sended");

    // Hook para redirigir
    const navigate = useNavigate();

    const [active, setActive] = useState(false);

    const [error, setError] = useState("");

    // Método Guardar un usuario en la BD
    const handleSubmit = async (e) => {

        // Prevenir que se actualice la pantalla
        e.preventDefault();

        // Obtener los datos del formulario
        let newUser = form;

        // Petición a la API (Backend) para guardar el usuario en la BD
        const request = await fetch(Global.url + '/users/user/create', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Obtener la información retornada por el backend
        const data = await request.json();

        // Verificar si el estado de la respuesta es "created" seteamos la variable de estado saved con "saved"
        if (request.status === 201 && data.status === "createdUser") {
            setSaved("saved");

            // Mostrar el modal de éxito
            Swal.fire({
                title: data.message,
                icon: 'success',
                confirmButtonText: 'Continuar',
            }).then(() => {
                // Redirigir después de cerrar el modal
                navigate('/login');
            });

        } else {
            setSaved("error");

            // Mostrar el modal de error
            Swal.fire({
                title: data.message || "¡Error en el registro!",
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            });
        };
    };

    return (
        <Container >
            <Button className="btnRegister" variant="dark" onClick={() => setActive(!active)}>Registrarse</Button>
            {active && (
                <div className="overlay" onClick={() => setActive(false)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-center">Registro de Usuario</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Ingresa tu nombre"
                                    onChange={changed}
                                    value={form.name || ''}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formLastName" className="mt-3">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Ingresa tu apellido"
                                    onChange={changed}
                                    value={form.lastName || ''}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formNick" className="mt-3">
                                <Form.Label>Nick</Form.Label>
                                <Form.Control
                                    name="nick"
                                    type="text"
                                    placeholder="Ingresa tu usuario"
                                    onChange={changed}
                                    value={form.nick || ''}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="position-relative mb-3">
                                <Form.Label>File</Form.Label>
                                <Form.Control
                                    type="image"
                                    onChange={changed}
                                    value={form.file || ''}
                                    name="image"
                                // isInvalid={!!errors.file}
                                />
                            </Form.Group>
                            <Form.Group controlId="formRoles" className="mt-3">
                                <Form.Label>Rol</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="roles"
                                    onChange={changed}
                                    value={form.roles || ''}
                                >
                                    <option value="client">Usuario</option>
                                    <option value="admin">Administrador</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId="formEmail" className="mt-3">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Ingresa tu correo"
                                    onChange={changed}
                                    value={form.email || ''}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mt-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Ingresa tu contraseña"
                                    onChange={changed}
                                    value={form.password || ''}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="phoneNumber" className="mt-3">
                                <Form.Label>Número de Teléfono</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="Ingresa tu número de teléfono"
                                    onChange={changed}
                                    value={form.phoneNumber || ''}
                                />
                            </Form.Group>


                            {error && <p className="text-danger mt-3">{error}</p>}

                            <Button variant="primary" type="submit" className="mt-3 w-100">
                                Registrarse
                            </Button>
                        </Form>
                    </div>
                </div>
            )}
        </Container>
    );
};

export default Register;
