import React from 'react';

const Hero = () => {
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjGc2MbCy9bMWzauXsCwu67EqpOUvxTBlMA&usqp=CAU" className="w-full" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Order Review Site </h1>
                    <p className="py-6">What is the first thing you do before you go see a movie or buy a product? That is right, chances are, you go and look up some reviews. Reviews have become a big part of our lives, as we reference them for almost everything nowadays.</p>
                    <button className=" mx-2 px-8 py-2 font-bold border rounded-3xl text-white bg-red-400 hover:bg-white hover:border-red-400 hover:text-red-400 shadow-lg shadow-red-500/50">Please Order</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;