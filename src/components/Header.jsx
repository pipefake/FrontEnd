import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Login from './Login'; 

const Header = () => {

    return (
        <Container className="mt-5">

            {/* Otros componentes */}
            <Row className="justify-content-center">
                <Col xs={10} md={6}>
                    <Login/>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
