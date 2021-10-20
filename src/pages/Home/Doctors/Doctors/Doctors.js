import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=> {
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
        })
    }, []);
    return (
        <div className="doctors container py-5">
            <Row xs={1} md={2} lg={4} className="gx-sm-0 gx-md-2 gx-lg-4 gy-4" >
                {
                    doctors.map(doctor => <Doctor key={doctor.key} doctor={doctor}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;