import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const services = useLoaderData()
    return (
        <>
            <h1 className='text-center text-4xl font-bold underline text-orange-600 my-6'>All Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </>

    );
};

export default Services;