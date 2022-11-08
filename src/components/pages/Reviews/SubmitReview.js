import React from 'react';

const SubmitReview = ({ service, user }) => {
    const { displayName, email } = user;
    const { _id, name } = service;
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const reviewData = {
            serviceId: _id,
            userName: displayName,
            serviceName: name,
            email,
            comment,
            time: new Date()
        }
        console.log(reviewData)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review Added Thanks for Your review')
                }
            })
            .catch(error => console.log(error))
        form.reset()


    }
    return (
        <div>
            <h1 className='font-bold text-4xl underline text-orange-600 my-3'>Make A Review</h1>
            <form onSubmit={handleFormSubmit}>
                <textarea name="comment" id="" cols="30" rows="10" className='border border-gray-400 block w-2/4 mx-auto px-3'></textarea>
                <button type="submit" className="my-3 inline-block px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
            </form>
        </div>
    );
};

export default SubmitReview;