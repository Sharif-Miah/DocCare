import React from 'react';

const SignleService = ({ service }) => {
    const { _id, img, name, price, description } = service;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 w-10/12 mx-auto">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-2 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <p className='text-xl'>Price: ${price}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-400 text-white">View Details</button>
            </div>
        </div>
    );
};

export default SignleService;