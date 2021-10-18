import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import img1 from '../../../images/slider/slider1.jpg';
import img2 from '../../../images/slider/slider2.jpg';

const Banner = () => {
    return (
        <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                    />
                </Carousel.Item>
        </Carousel>
    );
};

export default Banner;