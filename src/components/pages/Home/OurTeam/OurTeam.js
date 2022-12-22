import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import manager from '../../../../assets/members/manager.png'
import driver from '../../../../assets/members/driver.png'
import delivery from '../../../../assets/members/delivery.png'
import hr from '../../../../assets/members/hr.png'
import SingleMember from './SingleMember/SingleMember';

const OurTeam = () => {
    const teamDetails = [
        {
            name: "Rana",
            designation: "Driver",
            pic: driver

        },
        {
            name: "Nadim",
            designation: "Delivery",
            pic: delivery

        },
        {
            name: "Opurbo",
            designation: "HR",
            pic: hr

        },
        {
            name: "Mim",
            designation: "Manager",
            pic: manager

        },
    ]
    return (
        <>
            <h1 className='text-center text-4xl font-bold underline text-orange-600 my-6'>Our Team</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-5'>
                {
                    teamDetails.map((member, idx) => <SingleMember key={idx} member={member}></SingleMember>)
                }

            </div>
        </>
    );
};

export default OurTeam;