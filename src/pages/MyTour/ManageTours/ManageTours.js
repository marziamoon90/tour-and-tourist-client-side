
import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';
import './ManageTour.css'
import eventLogo from '../../../images/eventLogo.png'
import { Link } from 'react-router-dom';
import useBooking from '../../hooks/useBooking';

const ManageTours = () => {
    const [tour] = useBooking();


    return (
        <div className="manage-plan container my-5" style={{ backgroundColor: "#c1d891" }}>
            {/* <h1>manage your all plans from here</h1> */}
            <Row xs={1} md={2}>
                <Col xs={12} md={3}>
                    <div className="d-flex align-items-center mb-3" style={{ backgroundColor: "#c1d891" }}>
                        <img width="120px" className="rounded-circle" src={eventLogo} alt="" />
                        <div className="fw-bolder text-dark">
                            <h5 className="font-bolder">TOUR  &#38;</h5>
                            <h5 className="tourist">TOURIST</h5>
                        </div>
                    </div>
                    <div className="" style={{ backgroundColor: "#6C964A" }}>
                        <Nav.Link className="text-light" as={Link} to="/my_tour">
                            <i className="fas fa-users me-2"></i>
                            My Booking List</Nav.Link>
                    </div>
                </Col>
                <Col xs={12} md={9} className="my-3">
                    <Row xs={1} md={1} className="g-4">
                        {
                            tour.map(tour => <Tour
                                key={tour._id}
                                tour={tour}
                            ></Tour>)
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default ManageTours;