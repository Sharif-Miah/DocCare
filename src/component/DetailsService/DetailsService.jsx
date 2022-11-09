import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Review from '../Review/Review';

const DetailsService = () => {

    const { _id, img, name, description, price } = useLoaderData();

    const [reviews, setReviews] = useState();

    const notify = () => toast.success('Successfully Added')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const message = form.message.value;

        const reviews = {
            service: _id,
            customer: name,
            message
        }
        console.log(reviews);

        fetch('https://server-site-reviw-website-farhan-sharif.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    notify();
                    form.reset()
                }
            })

    }

    useEffect(() => {
        fetch('https://server-site-reviw-website-farhan-sharif.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='w-10/12 mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">Service: {name}</h2>
                    <h2 className="card-title">Price: ${price}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>

            {/* Review item  */}
            <div>
                {
                    reviews?.map(revi => <Review key={revi._id} revi={revi} />)
                }
            </div>


            <div className='my-12'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name='name' placeholder=' Name' className='p-3 border border-gray-700 mr-3 mb-3' />

                        <textarea name="message" id="" cols="30" rows="5" className='w-full border border-gray-700 p-3 mr-3' placeholder='Write your text'></textarea>

                        <input type="submit" value="Add Review" className='font-bold bg-orange-600 px-5 py-2 text-white cursor-pointer' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default DetailsService;