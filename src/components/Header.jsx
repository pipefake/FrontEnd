import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Login from './Login/Login'; 
import Register from './Register/Register';

const Header = () => {

    return (
        <Container className="mt-5 ju justify-content-end">

            <Row className="justify-content-end">
                <Col xs={10} md={6} lg={2}>
                    <Login/>
                    
                </Col>
                <Col xs={10} md={6} lg={2}>
                    <Register />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
