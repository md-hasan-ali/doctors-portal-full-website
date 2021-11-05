import React from 'react';
import Navigasion from '../../Sheard/Navigasion/Navigasion';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
// import BannerBottom from '../BannerBottom/BannerBottom';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigasion></Navigasion>
            <Banner></Banner>
            {/* <BannerBottom></BannerBottom> */}
            <Services></Services>
            <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;