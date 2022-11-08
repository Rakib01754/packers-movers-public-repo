import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    return (
        <div>
            <h1>Service for {service.name}</h1>
        </div>
    );
};

export default ServiceDetails;