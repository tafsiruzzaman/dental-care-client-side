import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    const {key} = useParams();
    const [service, setService] = useState({});
    const history = useHistory();
    const url = `/${key}.json`;
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data[0]))
    }, []);
    const handleBtn = () => {
        history.push('/appointment')
    }
    return (
        <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="w-100 img-fluid" src={service.img} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex h-100 align-items-center">
                            <div className="text-start">
                                <h1>{service.name}</h1>
                                <p>
                                    {service.innerText}
                                </p>
                                <Button onClick={handleBtn} variant="info rounded-0 py-2 px-4 text-white fw-bold">Book Appointment <i className="fas fa-hospital-user"></i></Button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ServiceDetails;