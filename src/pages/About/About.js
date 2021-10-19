import React from 'react';
import Doctors from '../Home/Doctors/Doctors/Doctors';
import Facilities from '../Home/Facilities/Facilities';

const About = () => {
    const hrWidth = {
        width: "6.5em",
        heigth: "7px"
    }
    return (
        <div className="container mb-5">
            <div className="text-start">
                <h3 className="mt-5 text-secondary">Our Management Team</h3>
                <hr style={hrWidth} className="text-info" />
                <h1 className="header_color fw-bolder">BOARD OF <span className="span_color">DIRECTORS</span></h1>
            </div>
            <Doctors></Doctors>
            <div className="text-start">
                <h1 className="header_color fw-bolder mb-2">Our <span className="span_color">Fecilities</span></h1>
            </div>
            <Facilities></Facilities>
        </div>
    );
};

export default About;