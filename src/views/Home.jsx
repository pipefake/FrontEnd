import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import citiesArray from './cities'; 
import Background from '../components/Backgorund/BackGround';
import {Cities} from '../components/Cities/Cities'; 


const Home = () => {

    //Creamos un estado para almacenar el valor del buscador
    const [searchTerm, setSearchTerm] = useState('');

    //Cuando el usuario escriba, cambia el valor del estado
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    //Filtramos con el valor del estados el array de cities
    const filteredCities = citiesArray.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="mt-5">
            <Background/>
            <Container fixed="top">

            {/* Título */}
            <h1 className="font-weight-bold text-center mb-4 display-1">Ciudades en Departamento de Huila</h1>
            <Row className="justify-content-center">
                <div style={{ height: "8px", width:"60%", backgroundColor: "#FFFFFF" }}></div>
                <div style={{ height: "8px", width:"60%", backgroundColor: "#007D00" }}></div>
                <div style={{ height: "8px", width:"60%", backgroundColor: "#FCDD09 " }}></div>
            </Row>
            
            {/* Barra de búsqueda */}
            <Row className="mt-3 justify-content-center mb-4 ">
                <Col xs={10} md={6}>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Col>
            </Row>
            </Container>
            {/* Listado de las ciudades */}
            <Cities filteredCities={filteredCities} />
        </Container>
    );
};

export default Home;
