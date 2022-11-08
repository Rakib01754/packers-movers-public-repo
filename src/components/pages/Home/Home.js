import React from 'react';
import About from './About';
import Banner from './Banner';
import SampleService from './SampleService/SampleService';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SampleService></SampleService>
            <About></About>
        </div>
    );
};

export default Home;