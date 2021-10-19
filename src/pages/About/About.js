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
            <h1 className="mt-5 text-secondary">About Us</h1>
            <p>Dental care Family Practice at Tega Cay believes a patient relationship is a partnership that spans a lifetime and that two-way communication is the key to good health. We strive to provide patient-centered healthcare and invite our patients and their families to be a part of the care team, as equal members in the decision-making and treatment process. Each of our primary care providers goes beyond annual exams and diagnosis or treatments to view each patient as a whole. We work to become familiar with patients’ lifestyle and health patterns in order to provide comprehensive guidance to managing health care needs.</p>
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