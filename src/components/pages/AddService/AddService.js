import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const navigate = useNavigate()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const details = form.details.value;
        const fee = form.fee.value;
        const rating = form.rating.value;
        const picture = form.picture.value;
        const service = {
            name, details, fee, rating, picture
        }
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service added success')
                    form.reset();
                    navigate('/services')
                }
            })
            .catch(error => console.log(error))

    }
    return (
        <>
            <h1 className='text-center text-5xl font-bold underline text-orange-600 my-6'>Add Service</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="relative z-0 mb-6 w-[80%] md:w-[50%] mx-auto group border-gray-400">
                    <input type="text" name="name" id="serviceName" className="block mb-2 py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Service Name" required />
                    <textarea rows='10' cols='20' type="text" name="details" id="details" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent mb-2 border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Write Something About Your Service" required />
                    <input type="text" name="picture" id="photoURL" className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent mb-2 border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Photo URL Here" required />
                    <div className='flex justify-between'>
                        <input type="number" name="rating" id="rating" className="block py-2.5 px-2 w-[45%] text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Input Rating Out Of 10" required />
                        <input type="number" name="fee" id="serviceFee" className="block py-2.5 px-2 w-[45%] text-sm text-gray-900 bg-transparent border-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Service Fee" required />
                    </div>
                </div>
                <button type="submit" className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </>

    );
};

export default AddService;