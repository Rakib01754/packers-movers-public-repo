import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/slider1.jpg'
import img2 from '../../../assets/slider2.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel>
            <div className='relative'>
                <img src={img1} alt="" />
                <div className="absolute top-1/4 left-10 text-white w-2/4 text-left ">
                    <h1 className='text-xl md:text-5xl font-bold'>We Deliver Your <br /> Product Safe & <br />Secure</h1>
                    <p className='mt-3 hidden lg:block'>Are you looking for a Reputed And Trusted Movers and Packers Service Provider? We are always at your service to meet up all the requirements related to Packing And Moving Services. </p>
                    <Link to='/services'>
                        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3">
                            More Details
                        </button>
                    </Link>
                </div>

            </div>
            <div>
                <img src={img2} alt="" />
                <div className="absolute top-1/4 left-10 text-white w-2/4 text-left ">
                    <h1 className='text-xl md:text-5xl font-bold'>We Deliver Your <br /> Product Safe & <br />Secure</h1>
                    <p className='mt-3 hidden lg:block'>Are you looking for a Reputed And Trusted Movers and Packers Service Provider? We are always at your service to meet up all the requirements related to Packing And Moving Services. </p>
                    <Link to='/services'>
                        <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3">
                            More Details
                        </button>
                    </Link>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;