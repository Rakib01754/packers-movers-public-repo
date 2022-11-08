import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import manager from '../../../../assets/members/manager.png'
import driver from '../../../../assets/members/driver.png'
import delivery from '../../../../assets/members/delivery.png'
import hr from '../../../../assets/members/hr.png'

const OurTeam = () => {
    return (
        <>
            <h1 className='text-center text-4xl font-bold underline text-orange-600 my-6'>Our Team</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
                <div className="flex justify-center rounded-lg">
                    <div className="shadow-lg bg-white max-w-sm">
                        <PhotoProvider>
                            <PhotoView src={driver}>
                                <img src={driver} className="h-80 w-full" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="p-6">
                            <h3 className="text-gray-900 text-2xl font-medium mb-2">Rana</h3>
                            <h4 className='text-orange-600 text-xl'>Driver</h4>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="shadow-lg bg-white max-w-sm">
                        <PhotoProvider>
                            <PhotoView src={delivery}>
                                <img src={delivery} className="h-80 w-full" alt="" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="p-6">
                            <h3 className="text-gray-900 text-2xl font-medium mb-2">Nadim</h3>
                            <h4 className='text-orange-600 text-xl'>Delivery</h4>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="shadow-lg bg-white max-w-sm">
                        <PhotoProvider>
                            <PhotoView src={hr}>
                                <img src={hr} className="h-80 w-full" alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="p-6">
                            <h3 className="text-gray-900 text-2xl font-medium mb-2">Opurbo</h3>
                            <h4 className='text-orange-600 text-xl'>HR</h4>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="shadow-lg bg-white max-w-sm">
                        <PhotoProvider>
                            <PhotoView src={manager}>
                                <img src={manager} className="h-80 w-full" alt="" />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="p-6">
                            <h3 className="text-gray-900 text-2xl font-medium mb-2">Mim</h3>
                            <h4 className='text-orange-600 text-xl'>Manager</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;