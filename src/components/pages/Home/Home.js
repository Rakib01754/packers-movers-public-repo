import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from './About';
import Banner from './Banner';
import OurTeam from './OurTeam/OurTeam';
import SampleService from './SampleService/SampleService';


const Home = () => {
    useTitle('Home')
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