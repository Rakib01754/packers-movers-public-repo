import React from 'react';

const SingleReview = ({ review }) => {
    return (
        <div key={review._id} className="flex flex-col mx-4 my-6 shadow-lg border border-orange-300">
            <div className="px-4 py-4 rounded-t-lg md:px-12 dark:bg-gray-900">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="mb-4 mr-2 w-5 h-5 dark:text-violet-400 inline">
                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg><span className='text-2xl'>{review.comment}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="mb-4 ml-2 w-5 h-5 dark:text-violet-400 inline">
                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                <div className='flex items-center gap-2'>
                    <img src={review?.userImage} alt="" className="w-16 h-16 mb-2  bg-center rounded-full dark:bg-gray-700" />
                    <div className='flex flex-col'>
                        <p className="text-xl font-semibold leading-tight text-left mb-2">{review?.userName}</p>
                        <p className='font-bold'>{review?.time}</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleReview;