import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewArea from '../Reviews/ReviewArea';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { name, fee, rating, details, picture } = service
    return (
        <div>
            <section className="p-6 bg-gray-100 text-white">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-2 py-16 rounded-md  md:px-8 xl:col-span-2 bg-gray-600">
                        <h1 className="text-5xl font-extrabold text-gray-50">{name}</h1>
                        <p className="my-3 border-white border-2 p-2 text-left">
                            {details}
                        </p>
                        <div className='flex justify-between py-4 text-white text-2xl'>
                            <p className='font-bold'>
                                Fee: ${fee}
                            </p>
                            <p className='font-bold'>
                                Rating: {rating}
                            </p>
                        </div>
                    </div>
                    <img src={picture} alt="{name}" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500 md:8 lg:mt-36" />
                </div>
            </section>
            <ReviewArea service={service}></ReviewArea>

        </div>
    );
};

export default ServiceDetails;