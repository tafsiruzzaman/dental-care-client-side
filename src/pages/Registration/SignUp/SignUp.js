import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctorImg from '../../../images/doctor.png';
import logo from '../../../images/logo.png';

const SignUp = () => {
    return (
        <div className="root_container py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={logo} className="img-fluid w-50 mt-5" alt="" />
                        <div className="bg-white p-3 mt-5">
                            <h2 className="fw-bold text-title">Sign up for free!</h2>
                            <h6 className="light-text">Already have an account? <Link to="/signin">Sign In</Link></h6>
                            <div className="w-75 mx-auto mt-3">
                                <input type="text" className="form-control w-100" placeholder="Your name"/>
                                <input type="text" className="form-control w-100" placeholder="Email address"/>
                                <input type="text" className="form-control w-100" placeholder="Password"/>
                                <input type="text" className="form-control w-100" placeholder="Confirm Password"/>
                                <Button variant="primary w-100 py-2 mt-3">Sign Up</Button>
                                <h5 className="mt-4 light-text">Or Sign Up with</h5>
                                <Button variant="danger me-2 rounded-0"><i class="fab fa-google"></i> Google</Button>
                                <Button variant="dark ms-2 rounded-0"><i class="fab fa-github"></i> GitHub</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 d-none d-md-block">
                        <div className="d-flex justify-content-center align-items-end h-100">
                            <div>
                                <img className="img-fluid" src={doctorImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;