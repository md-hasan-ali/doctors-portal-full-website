import React from 'react';
import Navigasion from '../../Sheard/Navigasion/Navigasion';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigasion></Navigasion>
            <Services></Services>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;