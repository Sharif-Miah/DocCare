import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SignleService from '../SignleService/SignleService';

const ThreeService = () => {
    const [services, setServices] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data);
            })
    }, [])

    return (
        <div className='my-14'>
            <h1 className='text-5xl text-center my-12'>Service </h1>
            <div className='grid  sm:grid-cols-1 lg:grid-cols-3 gap-4 mx-auto'>
                {
                    services?.map(service => <SignleService key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default ThreeService;