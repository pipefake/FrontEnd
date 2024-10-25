import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import CityCard from '../components/CityCard';
import cities from './cities'; 
import Background from '../components/BackGround';

const Home = () => {

    //Creamos un estado para almacenar el valor del buscador
    const [searchTerm, setSearchTerm] = useState('');

    //Cuando el usuario escriba, cambia el valor del estado
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    //Filtramos con el valor del estados el array de cities
    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="mt-5">
            <Background/>
            {/* Título */}
            <h1 className="text-center mb-4">Ciudades en Departamento de Huila</h1>

            {/* Barra de búsqueda */}
            <Row className="justify-content-center mb-4">
                <Col xs={10} md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Col>
            </Row>

            {/* Listado de las ciudades */}
            <Row>
                {filteredCities.map((city) => (
                    <Col key={city.id} xs={12} md={4} className="mb-4">
                        <CityCard city={city} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
