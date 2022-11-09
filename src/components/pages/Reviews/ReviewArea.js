import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SingleReview from './SingleReview';
import SubmitReview from './SubmitReview';

const ReviewArea = ({ service }) => {
    const { user } = useContext(AuthContext)
    const { _id } = service;
    const [customerReviews, setCustomerReviews] = useState([])
    const [refresh, setRefresh] = useState(true);
    console.log(refresh)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setCustomerReviews(data)
            });
    }, [refresh]);

    return (
        <>
            <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-4xl font-bold underline leading-none text-center text-orange-600">What our customers are saying about us</h1>
                </div>
                {
                    (customerReviews.length > 0) ? <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                        {
                            customerReviews.map(review => <SingleReview key={review._id} review={review} ></SingleReview>)
                        }
                    </div>
                        :
                        <h1 className='text-2xl text-center font-bold'>No Review Yet On This Service</h1>
                }
            </section>
            {
                (user && user.uid) ?
                    <SubmitReview service={service} user={user} setRefresh={setRefresh} refresh={refresh}></SubmitReview>
                    :
                    <>
                        <p className='font-bold text-lg my-3'>Please <Link to='/login' className='text-orange-600'>Login</Link> First To Add A Your Valuable Review</p>
                    </>
            }
        </>

    );
};

export default ReviewArea;