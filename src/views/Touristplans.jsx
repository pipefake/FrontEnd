import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Card, Nav } from 'react-bootstrap';
import PlanLayout from '../components/touristPlan/PlanLayout';
import Background from '../components/Backgorund/Background';
import './styles.css';
import { useParams } from 'react-router-dom';
import { Global } from '../helpers/Global';


const Touristplans = () => {
    const { cityId } = useParams()
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('hotels');
    const [toursData, setToursData] = useState([]);

    //Buscador
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    //Cambiar de tap en la vista Hoteles/Cosas por hacer
    const handleSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };

    const getTouristPlans = async () => {
        const response = await fetch(`${Global.url}/touristPlans?cityId=${cityId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = await response.json();
        setToursData(responseData);
    }

    useEffect(() => {
        getTouristPlans();
    }, [])

    const filteredData = toursData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm));

    return (
        <Container className="mt-5 h-100">
            <Background />
            <h1 className="font-weight-bold text-center mb-4 display-1">¡Haz una reserva ahora mismo!</h1>
            <div className='sticky-top z-3 bg-white w-100'>
                <Row className="justify-content-center">
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#FFFFFF" }}></div>
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#007D00" }}></div>
                    <div style={{ height: "8px", width: "60%", backgroundColor: "#FCDD09" }}></div>
                </Row>
                <Row className="py-4 justify-content-center border-bottom mx-1">
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
            </div>
            <Card>
                <Card.Body>
                    <PlanLayout hotelsData={filteredData} />
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Touristplans;