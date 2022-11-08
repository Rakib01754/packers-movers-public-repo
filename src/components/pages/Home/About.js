import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../../assets/about-company.png'

const About = () => {
    return (
        <section className="bg-gray-50 text-black py-8">
            <h1 className='font-bold text-3xl underline my-6 text-orange-600'>About Us</h1>
            <div className="container flex flex-col justify-center p-6 mx-auto lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={aboutImg} alt="" className="object-contain h-80 lg:h-auto xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">We give you complete control of your shipment.
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">The Packers And Movers  is one of the Bangladesh leading reputed online moving companies booking platforms that started its journey in 2006 with an objective to make the search for dependable packers and movers in India a hassle-free one for the people. This website is a resourceful online database where people can find a list of packer and mover service providers available in Dhaka, Chittagong, Barishal, Kishoreganj, and other big and small cities.
                    </p>
                    <Link to='/blogs'>
                        <button className="bg-blue-300 hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 rounded my-3">
                            More About Us
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;