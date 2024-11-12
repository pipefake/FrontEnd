import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // For redirecting the user
import Login from './Login/Login'; 
import Register from './Register/Register';

const Header = () => {
    const navigate = useNavigate();

    // Check if JWT token exists in localStorage
    const token = localStorage.getItem('Token');

    const handleLogout = () => {
        localStorage.removeItem('Token');
        navigate('/'); // Redirect to login page
    };
    const handleReservas = () => {
        navigate('/auth/reservas'); // Redirect to login page
    };

    const handlePublicar = () => {
        navigate('/auth/publicar'); // Redirect to login page
    };

    const handlePerfil = () => {
        navigate('/auth/perfil'); // Redirect to login page
    };

    const handleHome = () => {
        navigate('/auth'); // Redirect to login page
    };


    return (
        <Container className="mt-5 ju justify-content-end">
            <Row className="justify-content-end">
                {/* Show Login and Register if token does not exist */}
                {!token ? (
                    <>
                        <Col xs={10} md={6} lg={2}>
                            <Login />
                        </Col>
                        <Col xs={10} md={6} lg={2}>
                            <Register />
                        </Col>
                    </>
                ) : (
                    // Show options if token exists
                    <>
                    <row className="justify-content-center row">
                    <Col xs={10} md={6} lg={2} className="align-center">
                        <Button className="btnLogin" variant="outline-dark" onClick={()=>{handleHome()}}> Inicio</Button>
                        </Col>
                    <Col xs={10} md={6} lg={2} className="align-center">
                        <Button className="btnLogin" variant="outline-dark" onClick={()=>{handlePerfil()}}>👤 Perfil</Button>
                        </Col>
                        <Col xs={10} md={6} lg={2}>
                        <Button className="btnLogin" variant="outline-dark" onClick={()=>{handleReservas()}}>📅 Reservas</Button>
                        </Col>
                        <Col xs={10} md={6} lg={2}>
                        <Button className="btnLogin" variant="outline-dark" onClick={()=>{handlePublicar()}}>✏️ Publicar</Button>
                        </Col>
                        <Col xs={10} md={6} lg={2}>
                        <Button className="btnLogin" variant="outline-dark" onClick={()=>{handleLogout()}}> 🚪 Salir</Button>
                        </Col>
                    </row>
                    
                    </>
                )}
            </Row>
        </Container>
    );
};

export default Header;
