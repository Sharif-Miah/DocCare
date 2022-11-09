import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const allServices = useLoaderData();
    return (
        <div>
            <h1 className='text-5xl text-center text-red-400 underline'>All Services Here</h1>
            <div>

            </div>
        </div>
    );
};

export default Services;