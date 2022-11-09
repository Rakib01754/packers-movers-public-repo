import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const EditReview = () => {
    useTitle('Edit Review')
    const review = useLoaderData();
    const { _id, userImage, email, serviceName, userName, time, comment } = review;
    const navigate = useNavigate()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const newComment = form.comment.value;
        const reviewData = {
            serviceId: _id,
            userName,
            serviceName,
            email,
            userImage,
            comment: newComment,
            time,
        }
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success('Edit Successfull', {
                        style: {
                            border: '1px solid #713200',
                            padding: '16px',
                            color: '#713200',
                        },
                        iconTheme: {
                            primary: '#713200',
                            secondary: '#FFFAEE',
                        },
                    });
                    navigate('/reviews')
                    form.reset();
                }
            })
            .catch(error => console.log(error))


    }

    return (
        <div>
            <h1 className='font-bold text-4xl underline text-orange-600 my-3'>Edit Your Review</h1>
            <form onSubmit={handleFormSubmit}>
                <textarea name="comment" defaultValue={comment} id="" cols="30" rows="10" className='border border-gray-400 block w-2/4 mx-auto px-3'></textarea>
                <button type="submit" className="my-3 inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
            </form>
        </div>
    );
};

export default EditReview;