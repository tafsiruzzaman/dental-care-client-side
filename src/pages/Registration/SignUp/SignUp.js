import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import doctorImg from '../../../images/doctor.png';
import logo from '../../../images/logo.png';

const SignUp = () => {
    const {registerNewUser, setUserName, singInUsingGoogle, signInUsingGithub, setUser, setIsLoading} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMatched, setPasswordMatched] = useState(false);
    const [error, setError] = useState('');
    const hanldeNameChange = e => {
        setName(e.target.value);
    };
    const handleEmailChange = e => {
        const inputValue = e.target.value;
        const validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(inputValue);
        if(validEmail) {
            setEmail(inputValue);
            setError('');
        }
        else{
            setError('Please input a vlaid email')
        };
    };
    const handlePasswordChange = e => {
        const inputValue = e.target.value;
        if(inputValue.length >= 6) {
            setPassword(inputValue);
            setError('');
        }
        else{
            setError('Password must be at least 6 characters')
        };
    };
    const handleConfirmPassword = e => {
        const inputValue = e.target.value;
        if(inputValue === password) {
            setPasswordMatched(true)
            setError('');
        }
        else{
            setError('Password not matched');
        };
    };
    const handleSubmission = e => {
        e.preventDefault();
        if(!passwordMatched) {
            return
        }
        registerNewUser(email, password)
        .then((result) => {
            setUser(result.user);
            console.log(redirect_uri)
            history.push(redirect_uri);
            
            setUserName(name);
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    };
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
    const handleGithubSignIn = () => {
        signInUsingGithub()
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
                <div className="row pb-5">
                    <div className="col-md-6">
                        <img src={logo} className="img-fluid w-50 mt-5" alt="" />
                        <div className="bg-white p-3 mt-5">
                            <form onSubmit={handleSubmission}>
                                <h2 className="fw-bold text-title">Sign up for free!</h2>
                                <h6 className="light-text">Already have an account? <Link to="/signin">Sign In</Link></h6>
                                <div className="w-75 mx-auto mt-3">
                                    <input onBlur={hanldeNameChange} required type="text" className="form-control w-100" placeholder="Your name"/>
                                    <input onBlur={handleEmailChange} required type="email" className="form-control w-100" placeholder="Email address"/>
                                    <input onBlur={handlePasswordChange} required type="password" className="form-control w-100" placeholder="Password"/>
                                    <input onBlur={handleConfirmPassword} required type="password" className="form-control w-100" placeholder="Confirm Password"/>
                                    <small className="text-danger mt-3">{error}</small>
                                    <Button type="submit" variant="primary w-100 py-2 mt-3">Sign Up</Button>
                                    <h5 className="mt-4 light-text">Or Sign Up with</h5>
                                    <Button onClick={handleGoogleSignIn} variant="danger me-2 rounded-0"><i className="fab fa-google"></i> Google</Button>
                                    <Button onClick={handleGithubSignIn} variant="dark ms-2 rounded-0"><i className="fab fa-github"></i> GitHub</Button>
                                </div>
                            </form>
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