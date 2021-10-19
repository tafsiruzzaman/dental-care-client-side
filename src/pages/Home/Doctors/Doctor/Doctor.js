import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const {bgColor, name, innerText, img, speciality} = props.doctor;
    return (
        <div>
            <Col>
                <Card className="mx-start text-start rounded-0">
                    <Card.Img variant="top w-100 img-fluid" src={img}/>
                    <Card.Body style={{backgroundColor:`${bgColor}`}}>
                        <Card.Text className="text-white">{speciality}</Card.Text>
                        <Card.Title><h4 className="text-white fw-bold">{name}</h4></Card.Title>
                        <Card.Text className="mb-3">
                            {innerText}
                        </Card.Text>
                        <div className="text-end fs-3 text-white">
                            <i className="me-3 fab fa-facebook"></i>
                            <i className="me-3 fab fa-instagram"></i>
                            <i className="me-3 fab fa-twitter"></i>
                        </div>
                    </Card.Body>
                </Card>
            </Col>           
        </div>
    );
};

export default Doctor;