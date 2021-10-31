import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel className="careousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/d7NmqJ7/Getty-Images-1145406277.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-start  fw-bold">
                        <h1>Welcome to our page</h1>
                        <h2>We're offering honeymoon special</h2>
                        <h3>You can book your favourite package from anywhere</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Wp8qqBS/242092112-3095313267418076-2624350252859381087-n.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-start  fw-bold">
                        <h1>Welcome to our page</h1>
                        <h2>We're offering honeymoon special</h2>
                        <h3>You can book your favourite package from anywhere</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/3MV1pSh/Woman-wearing-mask-looking-through-window-while-traveling-in-tram-westend61-Getty-Images-1314519200.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-start  fw-bold">
                        <h1>Welcome to our page</h1>
                        <h2>We're offering honeymoon special</h2>
                        <h3>You can book your favourite package from anywhere</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/5nWXFD6/Getty-RF-588890475.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-start  fw-bold">
                        <h1>Welcome to our page</h1>
                        <h2>We're offering honeymoon special</h2>
                        <h3>You can book your favourite package from anywhere</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;