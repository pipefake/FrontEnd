import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PlanLayout from '../components/touristPlan/PlanLayout'; // Asegúrate de importar el nuevo componente
import neiva from './neiva.jpg'; // Importa la imagen aquí para usarla en el PlanLayout
import Background from '../components/Backgorund/BackGround';
import './styles.css';

const Touristplans = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const [activeTab, setActiveTab] = useState('hotels');

    //Buscador
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    //Cambiar de tap en la vista Hoteles/Cosas por hacer
    const handleSelect = (selectedTab) => {
        setActiveTab(selectedTab);
    };
    //listado de tours temporal
    const toursData = [
        {
            id: 1,
            name: 'Masaya San Agustín',
            description: 'N.º 1 en relación calidad-precio de 129 lugares donde alojarse en San Agustín',
            imageUrl: neiva,  // Usamos la imagen importada
            rating: 4.5,
            reviews: 139,
            reviewer: 'Tim C',
            reviewText: 'La habitación y la cama eran muy bonitas y la vista desde la terraza era espectacular. El bar y el restaurante también eran excelentes. Tenían una extensa y muy buena selección de vinos.',
        },
        {
            id: 11,
            name: 'Tour en el Parque Natural de los Nevados',
            description: 'Explora la belleza natural de los Nevados de Tolima, un destino ideal para los amantes del ecoturismo. Disfruta de caminatas, vistas impresionantes y la fauna local.',
            imageUrl: neiva,  // Puedes reemplazar con una imagen relacionada con los Nevados de Tolima
            rating: 4.7,
            reviews: 180,
            reviewer: 'Carlos G',
            reviewText: 'Una experiencia única. El trekking por el parque es desafiante, pero las vistas valen la pena. Un lugar ideal para los amantes de la naturaleza y las montañas.',
        },
        {
            id: 12,
            name: 'Recorrido cultural en Ibagué',
            description: 'Descubre la historia y cultura de Ibagué con un recorrido por los museos locales, plazas históricas y la famosa catedral. Perfecto para los que buscan sumergirse en la cultura tolimense.',
            imageUrl: neiva,  // Puedes usar una imagen de Ibagué o su catedral
            rating: 4.3,
            reviews: 150,
            reviewer: 'María T',
            reviewText: 'Un recorrido fascinante. Ibagué tiene una gran oferta cultural que no te puedes perder. Los guías turísticos son muy bien informados.',
        },
        {
            id: 13,
            name: 'Visita al Lago de Coello',
            description: 'Disfruta de un día de relax en el Lago de Coello, un hermoso destino para actividades acuáticas y paseos en bote. Ideal para pasar un día tranquilo en familia.',
            imageUrl: neiva,  // Puedes reemplazar con una imagen del Lago de Coello
            rating: 4.4,
            reviews: 120,
            reviewer: 'Laura V',
            reviewText: 'Un lugar increíble para desconectar. El paisaje es hermoso y las actividades acuáticas son muy divertidas. Perfecto para una escapada en familia.',
        },
    ];

    //listado de hoteles temporal
    const hotelsData = [
        {
            id: 1,
            name: 'Masaya San Agustín',
            description: 'N.º 1 en relación calidad-precio de 129 lugares donde alojarse en San Agustín',
            imageUrl: neiva,  // Usamos la imagen importada
            rating: 4.5,
            reviews: 139,
            reviewer: 'Tim C',
            reviewText: 'La habitación y la cama eran muy bonitas y la vista desde la terraza era espectacular. El bar y el restaurante también eran excelentes. Tenían una extensa y muy buena selección de vinos.',
        },
        {
            id: 2,
            name: 'Hotel San Agustín Plaza',
            description: 'Ubicado en el corazón de San Agustín, excelente ubicación con un servicio excepcional.',
            imageUrl: neiva,  // Puedes reemplazar con otra imagen si es necesario
            rating: 4.2,
            reviews: 200,
            reviewer: 'Laura M',
            reviewText: 'El hotel estaba bien situado, con fácil acceso a restaurantes y atracciones locales. El servicio fue muy atento y las instalaciones bien cuidadas.',
        },
        {
            id: 3,
            name: 'Hotel Boutique Villa Julieth',
            description: 'Un lugar tranquilo y acogedor para descansar en medio de la naturaleza.',
            imageUrl: neiva,
            rating: 4.7,
            reviews: 115,
            reviewer: 'Carlos G',
            reviewText: 'El ambiente era increíble, rodeado de jardines y espacios verdes. El personal fue amable y la comida deliciosa. ¡Definitivamente regresaré!',
        },
        {
            id: 4,
            name: 'Hotel La Casa de Nelly',
            description: 'Un hotel familiar con excelente atención y ambientes llenos de historia.',
            imageUrl: neiva,
            rating: 4.3,
            reviews: 98,
            reviewer: 'Sofia P',
            reviewText: 'Las instalaciones estaban muy bien cuidadas y la atención fue increíble. Sin embargo, el área de la piscina podría mejorar un poco.',
        },
        {
            id: 5,
            name: 'Hotel Campestre El Otoño',
            description: 'Un refugio campestre con vistas espectaculares y un ambiente relajante.',
            imageUrl: neiva,
            rating: 4.6,
            reviews: 150,
            reviewer: 'Marcelo R',
            reviewText: 'La experiencia fue única. El hotel tiene una excelente vista, es muy tranquilo y el personal es muy cordial. Ideal para desconectar de la rutina.',
        },
        {
            id: 6,
            name: 'Hostal San Agustín',
            description: 'Hostal económico con habitaciones cómodas y buena ubicación.',
            imageUrl: neiva,
            rating: 3.8,
            reviews: 65,
            reviewer: 'Ana L',
            reviewText: 'Un lugar sencillo, pero muy bien ubicado. El personal fue amable y las habitaciones estaban limpias, aunque las instalaciones no son lujosas.',
        },
        {
            id: 7,
            name: 'Hotel Villa Rosa',
            description: 'Un hotel de lujo con todas las comodidades modernas y vistas espectaculares.',
            imageUrl: neiva,
            rating: 4.8,
            reviews: 220,
            reviewer: 'Javier F',
            reviewText: 'Increíble estancia. Las vistas desde el balcón eran impresionantes. El personal fue muy profesional y la comida excelente. Un hotel ideal para disfrutar de una escapada de lujo.',
        },
        {
            id: 8,
            name: 'Hotel Tierra Bella',
            description: 'Hotel con un enfoque sostenible, rodeado de naturaleza y fauna local.',
            imageUrl: neiva,
            rating: 4.4,
            reviews: 180,
            reviewer: 'Paola S',
            reviewText: 'Me encantó la experiencia. Estar tan cerca de la naturaleza fue muy relajante, y el hotel tiene un enfoque ecológico que aprecio mucho. El desayuno también fue delicioso.',
        },
        {
            id: 9,
            name: 'Hotel Las Palmas',
            description: 'Ideal para una escapada en familia, con actividades para todos los gustos.',
            imageUrl: neiva,
            rating: 4.0,
            reviews: 170,
            reviewer: 'David T',
            reviewText: 'El hotel tiene una gran variedad de actividades y su personal es muy amigable. Ideal para quienes viajan con niños. Las habitaciones eran cómodas, pero las instalaciones podrían mejorar un poco.',
        },
        {
            id: 10,
            name: 'Finca Hotel El Eden',
            description: 'Escapada campestre con encanto rústico, perfecto para desconectar.',
            imageUrl: neiva,
            rating: 4.9,
            reviews: 95,
            reviewer: 'María C',
            reviewText: 'Un lugar perfecto para descansar. El ambiente rústico es muy acogedor, y el entorno natural te permite relajarte completamente. El servicio es excelente.',
        },
    ];

    //Filtra con el buscador
    const filteredData = (activeTab === 'hotels' ? hotelsData : toursData).filter((item) =>
    item.name.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)
);

return (
    <Container className="mt-5">
        <Background />
        <Container fixed="top">
            <h1 className="font-weight-bold text-center mb-4 display-1">¡Haz una reserva ahora mismo!</h1>
            <Row className="justify-content-center">
                <div style={{ height: "8px", width: "60%", backgroundColor: "#FFFFFF" }}></div>
                <div style={{ height: "8px", width: "60%", backgroundColor: "#007D00" }}></div>
                <div style={{ height: "8px", width: "60%", backgroundColor: "#FCDD09" }}></div>
            </Row>

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

        <Card>
            <Card.Header>
                <Nav variant="pills" defaultActiveKey="hotels" onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="hotels">Hoteles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="activities">Cosas que hacer</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body className="scroller">
                
                {activeTab === 'hotels' && (
                    <PlanLayout hotelsData={filteredData} /> )}

                {activeTab === 'activities' && (
                    <PlanLayout hotelsData={filteredData} /> 
                )}
            </Card.Body>
        </Card>
    </Container>
);
};

export default Touristplans;