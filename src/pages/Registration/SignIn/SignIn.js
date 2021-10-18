import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import doctorImg from '../../../images/doctor.png';
import logo from '../../../images/logo.png';
import './SignIn.css';

const SignIn = () => {
    const { singInUsingGoogle, setUser, setError, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        singInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
            setUser(result.user);
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };
    return (
        <div className="root_container py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={logo} className="img-fluid w-50 mt-5" alt="" />
                        <div className="bg-white p-3 mt-5">
                            <h2 className="fw-bold text-title">Sigh In to your account</h2>
                            <h6 className="light-text">Don’t have an account? <Link to="/signup">Sign Up Free!</Link></h6>
                            <div className="w-75 mx-auto mt-3">
                                <input type="text" className="form-control w-100" placeholder="Email address"/>
                                <input type="text" className="form-control w-100" placeholder="Password"/>
                                <h6 className="text-start light-text mt-3"><Link to="/signup">Forgot password?</Link></h6>
                                <Button variant="primary w-100 py-2 mt-3">Sign In</Button>
                                <h5 className="mt-4 light-text">Or Sign In with</h5>
                                <Button onClick={handleGoogleSignIn} variant="danger me-2 rounded-0"><i class="fab fa-google"></i> Google</Button>
                                <Button onClick={handleGoogleSignIn} variant="dark ms-2 rounded-0"><i class="fab fa-github"></i> GitHub</Button>
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

export default SignIn;