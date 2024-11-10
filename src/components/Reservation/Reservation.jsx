import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Reservation.css'; 

const Reservation = ({ onCancel }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

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
                    <Button variant="primary" className="m-3">
                        Reservar
                    </Button>
                    <Button variant="danger" className="m-3" onClick={() => onCancel()}>
                        Cancelar
                    </Button>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Reservation;
