import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your review has been deleted.',
                                'success'
                            )
                        }
                        const remaining = reviews.filter(rvw => id !== rvw._id)
                        setReviews(remaining);
                    });

            }
        })
    }
    return (
        <>
            <h1 className='text-center text-5xl font-bold underline text-orange-600 my-6'>My Reviews</h1>
            {
                (reviews.length) ?
                    <>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto">
                                <div className="p-1.5 w-full inline-block align-middle">
                                    <div className="w-full border rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                    >
                                                        NAME
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                    >
                                                        TITLE
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                                    >
                                                        Comment
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                    >
                                                        Edit
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                                    >
                                                        Delete
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {
                                                    reviews.map(review => <MyReviewsRow key={review._id} review={review} handleDelete={handleDelete}></MyReviewsRow>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <h1 className='font-bold text-3xl my-48'>No Reviews Were Added By You. Please Make A Review. </h1>
                    </>
            }
        </>

    );
}
export default MyReviews;
