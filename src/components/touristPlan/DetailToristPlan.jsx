import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Modal, Form } from 'react-bootstrap';
import Background from '../Backgorund/Background'; // Ensure the path is correct
import './DetailTouristPlan.css'; // Import the CSS file for styling

const DetailTouristPlan = () => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [token, setToken] = useState(localStorage.getItem('Token')); // Token state

  const { planId } = useParams();
 const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío del formulario (por ejemplo, validación y envío de datos)
    console.log(formData);
  };
  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        // Simulate fetching data with static JSON
        const data = {
          "_id": "67310d35e91d71a7f2203a5d",
          "location": {
            "name": "Desierto tatacoa",
            "description": "a 10 km de villavieja",
            "city": {
              "id": "36",
              "name": "Villavieja",
              "image": "https://res.cloudinary.com/dc38afvjc/image/upload/v1731272646/cities/im1zw5r4u046jyx7szm9.jpg",
              "department": "Huila"
            },
            "lat": 1232444,
            "lon": 9394944
          },
          "name": "Hotel villa bethel",
          "description": "Hermoso hotel ubicado en el desierto de la tatacoa",
          "address": "Kilometro 11 via villavieja",
          "price": 100000,
          "coverImage": "default.png",
          "images": [],
          "available": true,
          "createdBy": {
            "name": "loki",
            "lastName": "lokillo",
            "nick": "@loki",
            "email": "lokillo@gmail.com",
            "phoneNumber": "12345678910",
            "image": "default_user.png"
          },
          "createdAt": "2024-11-10T19:44:53.988Z"
        };

        setTimeout(() => {
          setPlan(data);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(`Error: ${err.message}`);
        setLoading(false);
      }
    };

    fetchPlanData();
  }, [planId]);

  const handleOpenModal = () => {
    if (!token) {
      alert("Debes ingresar para poder hacer una reserva.");
      // Optionally, redirect to login page here
      // window.location.href = '/login';
      return;
    }
    setShowModal(true); // Show modal if token exists
  };

  const handleCloseModal = () => setShowModal(false); // Close modal

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const { name, description, address, price, coverImage, location, createdBy } = plan;
  const { city, lat, lon } = location;
  const { name: cityName, department, image: cityImage } = city;
  const { name: creatorName, lastName, image: creatorImage } = createdBy;

  return (
    <div className="container p-4 plan-page d-flex flex-row border-0 shadow-card rounded">
      <Background />
      <div className="column">
        <h1 className="nombre-ciudad">{name}</h1>

        <Card style={{ display: 'flex', flexDirection: 'row' }}>
          {/* City Image */}
          {cityImage && (
            <Card.Img variant="top" src={cityImage} alt={cityName} className="city-image" />
          )}

          <Card.Body className="d-flex flex-column">
            <Card.Text>
              <strong>Descripción:</strong> {description}
            </Card.Text>

            <Card.Text>
              <strong>Dirección:</strong> {address}
            </Card.Text>

            <Card.Text>
              <strong>Precio:</strong> ${price}
            </Card.Text>

            <Card.Text>
              <strong>Ubicación:</strong> {location.description}, {cityName}, {department}
            </Card.Text>

            <Card.Text>
              <strong>Coordenadas:</strong> Lat: {lat}, Lon: {lon}
            </Card.Text>

            <Card.Text>
              <strong>Creado por:</strong> {creatorName} {lastName}
            </Card.Text>

            <Card.Text>
              <strong>Contacto:</strong> {createdBy.email}
            </Card.Text>

            {/* Only show the "Reservar" button if the token exists */}
            <Button className="col-12 col-md-4 m-2 p-3" variant="primary" onClick={handleOpenModal}>
              Reservar
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* Modal for reservation form */}
      <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Formulario de Reserva</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          
          <Form.Group controlId="formCheckIn">
            <Form.Label>Fecha de Check-in</Form.Label>
            <Form.Control
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formCheckOut">
            <Form.Label>Fecha de Check-out</Form.Label>
            <Form.Control
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar Reserva
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
    </div>
  );
};

export default DetailTouristPlan;
