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
                        <h3>Send us your message</h3>
                        <p className="mb-4">We will contact you very soon</p>
                        <input defaultValue={user.displayName} placeholder="Your Name" {...register("name", {required: true})} />
                        <input defaultValue={user.email} placeholder="Your Email" {...register("email", { required: true })} />
                        {errors.email && <span className="error text-start">This field is required</span>}
                        <input placeholder="City" defaultValue="" {...register("city", {required: true})} />
                        <input placeholder="Phone number" defaultValue="" {...register("phone", {required: true})} />
                        <input placeholder="Your Problem" defaultValue="" {...register("provlem", {required: true})} />
                        <input type="submit" value="Sent Message"/>
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