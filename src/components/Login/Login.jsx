import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";
import { useForm } from "../../hooks/useForm";
import { Global } from '../../helpers/Global';
import Swal from 'sweetalert2';

//Componente login para inicio de sesion
const Login = () => {

    //Estados para activar formulario
    const [saved, setSaved] = useState(false);

    // Usar el hook personalizado useForm para cargar los datos del formulario
    const { form, changed } = useForm({});

    // Estado para mostrar el estado de carga del formulario
    const [loadingForm, setLoadingForm] = useState(false);
    
    //Estados para activar formulario
    const [active, setActive] = useState(false);

    //Estados para almacenar correo y contraseña
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Método de prueba que imprime los estados por consola
    // Método Guardar un usuario en la BD
    const handleSubmit = async (e) => {

        // Prevenir que se actualice la pantalla
        e.preventDefault();
        setLoadingForm(true); // activar el disparador de carga
        // Obtener los datos del formulario
        let newUser = form;

        // Petición a la API (Backend) para guardar el usuario en la BD
        const request = await fetch(Global.url + '/users/login', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Obtener la información retornada por el backend
        const data = await request.json();
        localStorage.setItem('Token', data.data.token);
        // Verificar si el estado de la respuesta es "success" seteamos la variable de estado saved con "saved"
        if (request.status === 200 && data.status === "loggedIn") {
            setSaved("saved");
            setLoadingForm(false);
            // Mostrar el modal de éxito
            Swal.fire({
                title: data.message,
                icon: 'success',
                confirmButtonText: 'Continuar',
            }).then(() => {
                // Redirigir después de cerrar el modal
                // navigate('');
                console.log("Login exitoso")
            });
            setActive(false);
        } else {
            setSaved("error");
            setActive(false);
            // Mostrar el modal de error
            Swal.fire({
                title: data.message || "¡Error al iniciar sesión!",
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente',
            });
        };
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
                                    name="email"
                                    placeholder="Correo"
                                    onChange={changed}
                                    value={form.email || ''}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="mt-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    onChange={changed}
                                    value={form.password || ''}
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
                    </div>
                </div>
            )}
        </Container>
    );
};

export default Login;
