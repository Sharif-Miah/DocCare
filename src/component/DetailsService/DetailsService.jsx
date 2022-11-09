import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsService = () => {
    const { name } = useLoaderData()

    return (
        <div>
            <h1 className='text-4xl'>Details{name}</h1>
        </div>
    );
};

export default DetailsService;