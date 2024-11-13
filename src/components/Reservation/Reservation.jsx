import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Reservation.css';
import { Global } from '../../helpers/Global';

const Reservation = ({ onCancel, touristPlanId }) => {
    const [token, setToken] = useState(localStorage.getItem('Token')); 
    const [startDate, setStartDate] = useState(null); 
    const [endDate, setEndDate] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(""); 

  
    const createReservation = async () => {
        if (!startDate || !endDate) {
            alert("Por favor selecciona las fechas de entrada y salida.");
            return;
        }

        setLoading(true); 

        try {
            const response = await fetch(`${Global.url}/reservations/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    touristPlanId,
                    checkIn: startDate.toISOString(), 
                    checkOut: endDate.toISOString()  
                })
            });

            if (!response.ok) {
                throw new Error('Error al crear la reserva');
            }

            const reservation = await response.json();
            setLoading(false);
            alert("Reserva realizada con éxito."); 
        } catch (error) {
            setLoading(false);
            setErrorMessage('Hubo un problema con la solicitud. Intenta nuevamente.');
            console.error('Hubo un problema con la petición:', error);
        }
    };

    return (
        <Container>
            <Row className='from'>
                <Col>
                    <Form>
                        <Form.Group controlId="formDateRange" className="mt-2">
                            <Form.Label>Elige las fechas</Form.Label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <div>
                                    <DatePicker
                                        label="Check-in"
                                        value={startDate}
                                        onChange={(newValue) => setStartDate(newValue)}
                                        renderInput={(params) => <input {...params} />}
                                    />
                                    <DatePicker
                                        label="Check-out"
                                        value={endDate}
                                        onChange={(newValue) => setEndDate(newValue)}
                                        renderInput={(params) => <input {...params} />}
                                    />
                                </div>
                            </LocalizationProvider>
                        </Form.Group>
                    </Form>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>} 
                    <Button 
                        variant="primary" 
                        className="m-3" 
                        onClick={createReservation} 
                        disabled={loading} 
                    >
                        {loading ? 'Reservando...' : 'Reservar'}
                    </Button>
                    <Button 
                        variant="danger" 
                        className="m-3" 
                        onClick={() => onCancel()} 
                    >
                        Cancelar
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Reservation;
