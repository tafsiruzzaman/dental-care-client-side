import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import img from '../../images/doctor.png'
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
const Contact = () => {
    const history = useHistory();
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        history.push('/message')
    };
    return (
        <div className="container">
            <div className="row gx-sm-0 gx-md-2 gx-lg-5">
                <div className="col-md-6">
                    <div className="d-flex justify-content-center w-100">
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="header_color fw-bolder">Send us your <span className="span_color">Message</span></h3>
                        <p className="mb-4">We will contact you very soon</p>
                        <div className="text-start">
                            <input defaultValue={user.displayName} placeholder="Your Name" {...register("name", {required: true})} />
                            <input defaultValue={user.email} placeholder="Your Email" {...register("email", { required: true })} />
                            {errors.email && <span className="error text-start">This field is required</span>}
                            <input placeholder="City" defaultValue="" {...register("city", {required: true})} />
                            {errors.city && <span className="error text-start">This field is required</span>}
                            <input placeholder="Phone number" defaultValue="" {...register("phone", {required: true})} />
                            {errors.phone && <span className="error text-start my-0">This field is required</span>}
                            <div>
                            <label className="form-label mt-3">Your message</label>
                            <textarea className="form-control" rows="3" {...register("message", { required: true })}></textarea>
                            </div>
                            <input type="submit" className="bg-info text-white" value="Sent Message"/>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="col-6 d-none d-md-block">
                    <div className="d-flex justify-content-center align-items-end h-100">
                        <div>
                            <img className="img-fluid" src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;