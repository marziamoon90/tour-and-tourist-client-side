import React from 'react';
import './UserBooked.css'
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UserBooked = ({ booking }) => {



    return (
        <div>
            <Col className="container ">
                <div style={{ backgroundColor: 'lightgrey' }} className="rounded">
                    <Row xs={1} md={2} className="g-0 p-3">
                        <Col md={4} >
                            <div>
                                <img className="booking-img  " src={booking?.img} alt="" />
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                                <Nav.Link className="p-0" as={Link} to={`/book/${booking.bookingId}`}><h4 className="text-primary">{booking.spot}</h4></Nav.Link>
                                <h5>{booking?.name}</h5>
                                <h6>{booking.date}</h6>
                                <div className="d-md-flex align-items-end justify-content-end">
                                    <button className="border-0 bg-danger text-light rounded px-3 py-2">Cancel<i className="fas fa-trash-alt text-light ms-2"></i></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    );
};

export default UserBooked;