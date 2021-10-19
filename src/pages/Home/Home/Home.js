import React from 'react';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';
import Middle from '../Middle/Middle';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Middle></Middle>
            <Services></Services>
        </div>
    );
};

export default Home;