import React from 'react';
import Testimonials from '../../About/Testimonials/Testimonials/Testimonials';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors/Doctors';
import Middle from '../Middle/Middle';
import './Home.css';

const Home = () => {
    return (
        <div className="home mb-5">
            <Banner></Banner>
            <Middle></Middle>            
            <Doctors></Doctors>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;