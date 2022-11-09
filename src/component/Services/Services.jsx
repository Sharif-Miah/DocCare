import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServiceCart from '../SingleServiceCart/SingleServiceCart';

const Services = () => {
    const allServices = useLoaderData();
    return (
        <div>
            <h1 className='text-5xl text-center text-red-400 my-12'>All Services Here</h1>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mx-auto'>
                {
                    allServices.map(allService => <SingleServiceCart key={allService._id} allService={allService} />)
                }
            </div>
        </div>
    );
};

export default Services;