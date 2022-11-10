import React, { useEffect, useState } from 'react';
import { Grid } from 'react-loader-spinner';
// import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Service from './Service';

const Services = () => {
    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState([]);
    useTitle('Services')
    useEffect(() => {
        setLoading(true)
        fetch('https://assignment-11-server-bay.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false)
            })
    }, [])
    return (
        <>
            {
                loading ? <div className="w-28 h-28 mx-auto my-60">
                    <Grid
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="grid-loading"
                        radius="12.5"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
                    :
                    <>
                        <h1 className='text-center text-5xl font-bold underline text-orange-600 my-6'>All Services</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12'>
                            {
                                services.map(service => <Service key={service._id} service={service}></Service>)
                            }
                        </div>
                    </>
            }

        </>

    );
};

export default Services;