import React from 'react';
import img from '../../../images/doktorka.png'
import sign from '../../../images/sign.png'
import Facilities from '../Facilities/Facilities';
import './Middle.css';

const Middle = () => {
    return (
        <div className="container">
            <div className="middle">
                <Facilities></Facilities>
                <div className="row my-5">
                    <div className="col-lg-6 text-start">
                        <div className="d-flex align-items-center justify-content-center h-100 p-sm-2 p-md-4 p-lg-5">
                            <div>
                                <h4>Dr Jenna Wilson</h4>
                                <hr className="w-25 text-info"/>
                                <h1 className="text-info fs-1 fw-bolder">YOUR DENTAL TEAM </h1>
                                <p>Dr. Jenna Wilson is is dedicated to providing her patients with the most beautiful smile together with the best dental protection available nowadays. Dr Jenna non malesuada erat, id consequat nunc. Nulla fermentum ipsum eget tortor laoreet varius.</p>
                                <div className="d-flex align-items-center justify-content-center mt-5 mb-4">
                                    <img className="img-fluid" src={sign} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <div>
                            <img className="img-fluid w-75" src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;