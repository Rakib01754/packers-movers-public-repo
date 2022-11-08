import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, details, fee, rating, picture, _id } = service
    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} className="rounded-t-lg h-80 w-full" alt="" />
                    </PhotoView>
                </PhotoProvider>
                {/* <img className="rounded-t-lg h-80 w-full" src={picture} alt="" /> */}
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {details ? details.slice(0, 100) + '...' : details}
                    </p>
                    <div className='flex justify-between py-4 text-orange-700'>
                        <p className='font-bold'>
                            Fee: ${fee}
                        </p>
                        <p className='font-bold'>
                            Rating: {rating}
                        </p>
                    </div>
                    <Link to={`/service/${_id}`}>
                        <button type="button" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;