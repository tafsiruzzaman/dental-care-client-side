import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {name, category, img, key, innerText} = props.service;
    const btnBGColor = {
        backgroundColor: "#dff0ef",
        border: "0px"
    };
    const titleStyle = {
        color: "#222"
    }
    const textColour = {
        color: "#7e8592"
    };
    return (
        <div>
            <Col>
                <Card className="py-3 text-start border-0 rounded-0">
                    <Card.Img variant="w-100" src={img}/>
                    <Card.Body className="border-0">
                        <Card.Subtitle><p style={textColour} className="mt-3">{category}</p></Card.Subtitle>
                        <Card.Title><h4 style={titleStyle} className="fw-bold">{name}</h4></Card.Title>
                        <Card.Text style={textColour}>
                            <small>{innerText}</small>
                        </Card.Text>
                        <Link to={`/service/${key}`}><Button style={btnBGColor} variant="info" className="rounded-0 text-dark fw-bold px-3 py-2">Learn more</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;