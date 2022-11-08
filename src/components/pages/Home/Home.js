import React from 'react';
import About from './About';
import Banner from './Banner';
import OurTeam from './OurTeam/OurTeam';
import SampleService from './SampleService/SampleService';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SampleService></SampleService>
            <About></About>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;