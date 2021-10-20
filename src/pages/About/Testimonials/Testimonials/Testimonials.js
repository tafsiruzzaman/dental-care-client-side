import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect( () => {
        fetch('./testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, []);
    const hrWidth = {
        width: "6.5em",
        heigth: "7px"
    };
    return (
        <div className="testimonials container">
            <h5 className="mt-4 text-secondary">The best reference</h5>
            <hr style={hrWidth} className="mx-auto text-info" />
            <h1 className="header_color fw-bolder mb-4 fs-1">CLIENT <span className="span_color">TESTIMONIALS</span></h1>

            <Row xs={1} md={1} lg={2} className="g-0" >
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial.key} testimonial={testimonial}></Testimonial>)
                }
            </Row>
        </div>
    );
};

export default Testimonials;