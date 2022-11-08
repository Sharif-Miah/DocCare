import React from 'react';

const Profile = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <h1 className='text-5xl text-center my-8 font-bold underline'>When I was start job </h1>
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                            <h3 className="text-3xl font-semibold">My work start </h3>
                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Farhan Sharif</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Fish Delivery </h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2021</time>
                                <p className="mt-3">A fish is an amazing animal which lives and breathes in water.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Cloth Delivery</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jul 2022</time>
                                <p className="mt-3">Clothing is worn where the human body needs protection.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Book Delivery</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jan 2017</time>
                                <p className="mt-3">A book can change your life by its content.There are lots of life-changing books that we all need to read.</p>
                            </div>

                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Burger Delivery</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Nov 2018</time>
                                <p className="mt-3">A book can change your life by its content.There are lots of life-changing books that we all need to read.</p>
                            </div>

                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Fruits Delivery</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Mar 2020</time>
                                <p className="mt-3">They are low in calories their and naturally sweet. Fruits and</p>
                            </div>

                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">Vegetable Delivery</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Jun 2022</time>
                                <p className="mt-3">vegetables contain important vitamins. minerals and plant chemicals. They also contain fibre.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;