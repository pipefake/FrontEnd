import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import './Register.css'

const Register = () => {

    //Estados para activar formulario
    const [active, setActive] = useState(false);

    // Estados para cada campo en el formulario
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nick, setNick] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [roles, setRoles] = useState(["role_user"]); // Rol por defecto
    const [error, setError] = useState("");

    // Manejador de envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }
        // Enviar datos al backend o manejarlos localmente
        const newUser = {
            name,
            last_name: lastName,
            nick,
            email,
            password,
            phone_number: phoneNumber,
            roles,
        };
        console.log("Usuario registrado:", newUser);
        setError(""); // Limpiar el error después de un envío exitoso
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
                                    placeholder="Ingresa tu nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formLastName" className="mt-3">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu apellido"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formNick" className="mt-3">
                                <Form.Label>Nick</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu usuario"
                                    value={nick}
                                    onChange={(e) => setNick(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="position-relative mb-3">
                                <Form.Label>File</Form.Label>
                                <Form.Control
                                    type="file"
                                    required
                                    name="file"
                                    // isInvalid={!!errors.file}
                                />
                            </Form.Group>
                            <Form.Group controlId="formRoles" className="mt-3">
                                <Form.Label>Rol</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={roles}
                                    onChange={(e) => setRoles([e.target.value])}
                                >
                                    <option value="role_user">Usuario</option>
                                    <option value="role_admin">Administrador</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId="formEmail" className="mt-3">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu correo"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mt-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Ingresa tu contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formConfirmPassword" className="mt-3">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirma tu contraseña"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formPhoneNumber" className="mt-3">
                                <Form.Label>Número de Teléfono</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresa tu número de teléfono"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
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
