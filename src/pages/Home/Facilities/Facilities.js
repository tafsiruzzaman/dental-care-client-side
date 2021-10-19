import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Facility from '../Facility/Facility';

const Facilities = () => {
    const [facilities, setFacilities] = useState([]);
    useEffect(()=> {
        fetch('./facilities.json')
        .then(res => res.json())
        .then(data => setFacilities(data))
    }, []);
    return (
        <div className="container">
            <Row xs={1} md={2} lg={4} className="gx-0" >
                {
                    facilities.map(facility => <Facility key={facility.key} facility={facility}></Facility>)
                }
            </Row>
        </div>
    );
};

export default Facilities;