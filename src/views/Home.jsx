import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Background from '../components/Backgorund/BackGround';
import { Cities } from '../components/Cities/Cities'; 

const Home = () => {
    // Creamos un estado para almacenar el valor del buscador
    const [searchTerm, setSearchTerm] = useState('');

    // Creamos un estado para almacenar las ciudades
    const [fetchedCities, setFetchedCities] = useState([]);

    // Cuando el usuario escriba, cambia el valor del estado
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        handleSubmit();
    }, []);

    // Método para hacer la petición al backend y obtener las ciudades
    const handleSubmit = async () => {
        try {
            // Petición a la API (Backend) para listar las ciudades
            const response = await fetch('http://localhost:3002/api/locations', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Verificamos si la respuesta es correcta
            if (!response.ok) {
                throw new Error('Error al obtener las ciudades');
            }

            // Obtener la información retornada por el backend
            const cities = await response.json();


            // Actualizamos el estado con los datos de las ciudades
            setFetchedCities(cities);
            console.log(cities); 
        } catch (error) {
            console.error('Hay un error en la petición', error);
        }
    };

    // Filtramos las ciudades con el valor del estado de búsqueda
    const filteredCities = fetchedCities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="mt-5">
            <Background/>
            <Container fixed="top">
                {/* Título */}
                <h1 className="font-weight-bold text-center mb-4 display-3">¿Qué ciudad del Huila deseas visitar?</h1>
                <Row className="justify-content-center">
                    <div style={{ height: "8px", width:"60%", backgroundColor: "#FFFFFF" }}></div>
                    <div style={{ height: "8px", width:"60%", backgroundColor: "#007D00" }}></div>
                    <div style={{ height: "8px", width:"60%", backgroundColor: "#FCDD09 " }}></div>
                </Row>

                {/* Barra de búsqueda */}
                <Row className="mt-3 justify-content-center mb-4">
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

            {/* Listado de las ciudades filtradas */}
            <Cities filteredCities={filteredCities} />
        </Container>
    );
};

export default Home;
