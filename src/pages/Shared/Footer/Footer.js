import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className=" bg-dark text-muted p-5">

            <Row xs={1} md={4}>
                <Col md={2}>
                    <img src="https://www.isleofskye.com/images/Logo/Skye-Contact.png" alt="" />
                </Col>
                <Col>
                    <div>
                        <h5><i className="fas fa-tree me-2"></i>Tour And Tourist</h5>
                        <small>Our exhilarating whitewater rafting, kayaking, and zip lining activities make for fun and memorable adventures. We strive to enhance the lives of our guests by creating the best human-powered outdoor adventures available.</small>
                    </div>
                </Col>
                <Col>
                    <div className="my-2 my-lg-0">
                        <h5><i className="fas fa-binoculars me-2"></i>Views Country</h5>
                        <li>America</li>
                        <li>Canada</li>
                        <li>South Africa</li>
                        <li>Netherland</li>
                        <li>North America</li>
                    </div>
                </Col>
                <Col>
                    <h5>Contact</h5>
                    <p><i className="fas fa-home me-2"></i> New York, NY 10012, US</p>
                    <p><i className="fas fa-envelope me-2"></i> info@example.com</p>
                    <p> <i className="fas fa-phone me-2"></i>+ 01 234 567 88</p>
                    <p><i className="fab fa-facebook-square mx-2"></i><i className="fab fa-twitter mx-2"></i><i className="fab fa-google mx-2"></i><i className="fab fa-instagram mx-2"></i></p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;