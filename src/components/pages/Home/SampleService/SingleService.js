import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button } from '@material-tailwind/react';

const SingleService = ({ service }) => {
    const { name, details, fee, rating, picture, _id } = service
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-gray-300 max-w-sm border-2 border-orange-300">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} className="rounded-t-lg h-80 w-full p-2" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="p-6">
                    <h5 className="text-gray-900 text-2xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-2">
                        {details ? details.slice(0, 100) + '...' : details}
                    </p>
                    <div className='flex justify-between py-2 text-orange-700'>
                        <p className='font-bold'>
                            Fee: ${fee}
                        </p>
                        <p className='font-bold'>
                            Rating: {rating}
                        </p>
                    </div>
                    <Link to={`/service/${_id}`}>
                        <Button color="blue">View Details</Button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SingleService;