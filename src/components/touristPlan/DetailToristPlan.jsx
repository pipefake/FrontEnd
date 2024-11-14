import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import Background from '../Backgorund/Background';
import './DetailTouristPlan.css'; 
import { Global } from '../../helpers/Global';
import GaleryImages from './GaleryImages';
import Reservation from '../Reservation/Reservation';
import { useParams } from 'react-router-dom';

const DetailTouristPlan = () => {
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showReservation, setShowReservation] = useState(false); 
  const token = localStorage.getItem('Token');

  const { touristPlanId } = useParams();


  const getTouristPlan = async () => {
    try {
      const response = await fetch(`${Global.url}/touristPlans/${touristPlanId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Error al obtener el plan turístico');
      }

      const touristPlan = await response.json();
      setPlan(touristPlan);
      setLoading(false);
    } catch (error) {
      console.error('Hubo un problema con la petición:', error);
      setError('Hubo un problema con la petición');
    }
  };

  useEffect(() => {
    getTouristPlan();
  }, [touristPlanId]);

  const handleOpenReservation = () => {
    if (!token) {
      alert("Debes iniciar sesión para poder hacer tu reserva.");
      return;
    }
    setShowReservation(true); 
  };

  const handleCloseReservation = () => {
    setShowReservation(false); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container p-4 plan-page d-flex flex-row border-0 shadow-card rounded">
      <Background />
      <div className="column">
        {!showReservation ? (
          <>
            <h1 className="nombre-ciudad">{plan.name}</h1>

            <Card style={{ display: 'flex', flexDirection: 'row' }}>
              <GaleryImages images={plan.images} />

              <Card.Body className="d-flex flex-column">
                <Card.Text>
                  <strong>Descripción:</strong> {plan.description}
                </Card.Text>

                <Card.Text>
                  <strong>Dirección:</strong> {plan.address}
                </Card.Text>

                <Card.Text>
                  <strong>Precio:</strong> ${plan.price}
                </Card.Text>

                <Card.Text>
                  <strong>Ubicación:</strong> {plan.location.description}, {plan.location.name}, {plan.location.city.department}
                </Card.Text>

                <Card.Text>
                  <strong>Coordenadas:</strong> Lat: {plan.location.lat}, Lon: {plan.location.lon}
                </Card.Text>

                <Card.Text>
                  <strong>Creado por:</strong> {plan.createdBy.name} {plan.createdBy.lastName}
                </Card.Text>

                <Card.Text>
                  <strong>Contacto:</strong> {plan.createdBy.email} {plan.createdBy.phoneNumber}
                </Card.Text>

                <Button className="col-12 col-md-4 m-2 p-3" variant="primary" onClick={handleOpenReservation}>
                  Reservar
                </Button>
              </Card.Body>
            </Card>
          </>
        ) : (
          <Reservation touristPlanId={touristPlanId} onCancel={handleCloseReservation} />
        )}
      </div>
    </div>
  );
};

export default DetailTouristPlan;
