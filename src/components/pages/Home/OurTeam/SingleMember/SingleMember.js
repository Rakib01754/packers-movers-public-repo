import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleMember = ({ member }) => {
    const { name, designation, pic } = member
    return (
        <div className="flex justify-center rounded-lg">
            <div className="shadow-lg bg-white max-w-sm">
                <PhotoProvider>
                    <PhotoView src={pic}>
                        <img src={pic} className="h-80 w-full" alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="p-6">
                    <h3 className="text-gray-900 text-2xl font-medium mb-2">{name}</h3>
                    <h4 className='text-orange-600 text-xl font-semibold'>{designation}</h4>
                </div>
            </div>
        </div>
    );
};

export default SingleMember;