import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import doctors from '../../images/doctors.jpg';

const Appointment = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        console.log(data);
        history.push("/conformation")
    };
    const hrWidth = {
        width: "6.5em",
        heigth: "7px"
    };
    return (
        <div className="container py-5">
            <div className="text-start">
                <h4 className="mt-5 fs-3 text-secondary">GET THE RIGHT DENTAL CARE</h4>
                <hr style={hrWidth} className="text-info" />
                <h1 className="header_color fs-1 fw-bolder">Book with <span className="span_color">your doctor</span></h1>
                <p className="fs-6">Some up and coming trends are healthcare consolidation for independent <br className="d-none d-md-block" /> 
                healthcare centers  that see a cut in unforeseen payouts.</p>
            </div>
            <div className="row text-start gx-0 gx-lg-4 gy-4">
                <div className="col-md-6 pe-3">
                    <img src={doctors} className="img-fluid" alt="" />
                    <div className="mt-3">
                        <div className="row">
                            <div className=" col-2 d-flex align-items-center">
                                <h1 className="fs=1 mb-0"><i className="fas fa-phone-square-alt text-info"></i></h1>
                            </div>
                            <div className="col-10">
                                <h4 className="fw-bold">CALL US ANYTIME</h4>
                                <p className="mb-1">0-5641254125-22</p>
                            </div>
                        </div>
                        <hr className="text-info" />
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className=" col-2 d-flex align-items-center">
                                <h1 className="fs=1 mb-0"><i className="fas fa-map-marker-alt text-info"></i></h1>
                            </div>
                            <div className="col-10">
                                <h4 className="fw-bold">VISIT US ANYTIME</h4>
                                <p className="mb-1">27th Avenue</p>
                                <p className="mb-1">New York, W2 3XE, US</p>
                            </div>
                        </div>
                        <hr className="text-info" />
                    </div>
                    <div className="mt-3">
                        <div className="row">
                            <div className=" col-2 d-flex align-items-center">
                                <h1 className="fs=1 mb-0"><i className="fas fa-tooth text-info"></i></h1>
                            </div>
                            <div className="col-10">
                                <h4 className="fw-bold">BOOK AN APPOINTMENT</h4>
                                <p className="mb-1">Click here to book an appointment at Dental Care.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <Form onSubmit={handleSubmit(onSubmit)} className="px-lg-5">
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={user.displayName} type="text" placeholder="Enter name" {...register("name", { required: true })} />
                            {errors.name && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address <span className="text-danger">*</span></Form.Label>
                            <Form.Control defaultValue={user.email} type="email" placeholder="Enter email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone No <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="number" placeholder="Phone number" {...register("phone", { required: true })} />
                            {errors.phone && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select {...register("doctor", { required: true })}>
                                <option>Audrey Button</option>
                                <option>Emma Beckett</option>
                                <option>Hellen Hill</option>
                                <option>Arianna McDonald</option>
                            </Form.Select>
                            {errors.doctor && <span className="text-danger">Please Select One</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Appointment Date <span className="text-danger">*</span></Form.Label>
                            <Form.Control type="date" placeholder="Date" {...register("date", { required: true })}/>
                            {errors.date && <span className="text-danger">This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select {...register("time", { required: true })}>
                                <option>9 AM - 11 AM</option>
                                <option>2.30 PM - 4 PM</option>
                                <option>7 PM - 9 PM</option>
                            </Form.Select>
                            {errors.time && <span className="text-danger">Please select one</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Additional Message</Form.Label>
                                <Form.Control as="textarea" rows={3} {...register("message")}/>
                            </Form.Group>
                        <Button variant="info" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;