import React from 'react';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import MedacalHealth from '../MedacalHealth/MedacalHealth';
import Profile from '../Profile/Profile';
import Support from '../Support/Support';
import ThreeService from '../ThreeService/ThreeService';

const Home = () => {
    return (
        <div>
            <Hero />
            <ThreeService />
            <Features />
            <Profile />
            <Support/>
            <MedacalHealth/>
            <Contact/>
        </div>
    );
};

export default Home;