import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Testimonial = (props) => {
    const {name, img, sign, bgColor, innerText} = props.testimonial;
    const bgColour = {
        backgroundColor: `${bgColor}`
    }
    return (
        <Col style={bgColour}>
            <Row xs={1} md={2} className="p-4 text-white gy-5">
                <Col>
                    <div>
                        <div>
                            <img className="img-fluid rounded-circle w-50" src={img} alt="" />
                            <h4 className="mt-2">{name}</h4>
                            <img className="img-fluid" src={sign} alt="" />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex align-items-center justify-content-center h-100 p-3">
                        <h5 className="text-start">"{innerText}"</h5>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default Testimonial;