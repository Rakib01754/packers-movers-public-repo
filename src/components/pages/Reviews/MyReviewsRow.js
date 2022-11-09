import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewsRow = ({ review, handleDelete }) => {
    const { _id, serviceName, comment, userName } = review;

    const deleteReview = (id) => {
        handleDelete(id);
    }
    return (
        <tr className='text-left'>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {userName}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                {serviceName}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {comment}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <Link
                    to={`/reviews/${_id}`}
                    className="text-green-500 hover:text-green-700"
                >
                    Edit
                </Link>
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <Link className="text-red-500 hover:text-red-700"
                    onClick={() => deleteReview(_id)}
                >
                    Delete
                </Link>
            </td>
        </tr>
    );
};

export default MyReviewsRow;