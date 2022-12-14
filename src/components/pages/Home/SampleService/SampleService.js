import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService';

const SampleService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://assignment-11-server-bay.vercel.app/servicessample')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <h1 className='text-center text-4xl font-bold underline text-orange-600 my-6'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>

            <div>
                <Link to='/services'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold hover:text-white py-2 px-4 rounded my-6">
                        View All Services
                    </button>
                </Link>
            </div>

        </>

    );
};

export default SampleService;