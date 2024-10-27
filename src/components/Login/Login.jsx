import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";

//Componente login para inicio de sesion
const Login = () => {

    //Estados para activar formulario
    const [active, setActive] = useState(false);

    //Estados para almacenar correo y contraseña
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Método de prueba que imprime los estados por consola
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <Container >
            <Button className="btnLogin" variant="outline-dark" onClick={() => setActive(!active)}>Login</Button>
            {active && (
                <div className="overlay" onClick={() => setActive(false)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-center">Ingresar</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Correo"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3 w-100">
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            )}
            </Container>
    );
};

export default Login;
