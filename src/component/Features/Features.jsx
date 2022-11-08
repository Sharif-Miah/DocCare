import React from 'react';

const Features = () => {
    return (
        <section className=" bg-gray-800 text-gray-100 my-12 w-10/12 p-6 mx-auto">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Chose Your Products</h2>
                <p className="dark:text-gray-400">you will get fresh products here.</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Fish Delivery</h3>
                    <div className="space-y-1 leading-tight">
                        <p>A fish is an amazing animal which lives and breathes in water.</p>
                        <p>Fish have been on the Earth for over 500 million years.</p>
                        <p>All fish have a backbone and most breathe through gills</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Book Delivery</h3>
                    <div className="space-y-1 leading-tight">
                        <p>A book can change your life by its content.  </p>
                        <p>There are lots of life-changing books that</p>
                        <p>we all need to read.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Cloth Delivery</h3>
                    <div className="space-y-1 leading-tight">
                        <p>Clothing is worn where the human body needs protection.  </p>
                        <p>from the sun and dust in hot, dry countries lacking shade</p>
                        <p>and from the cold and wet in temperate climates.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Burger Delivery</h3>
                    <div className="space-y-1 leading-tight">
                        <p>
                            Write a topic sentence as the "top bun" of your hamburger. ..
                        </p>
                        <p>you what the paragraph is about. For example, if you were writing</p>
                        <p>The topic sentence should tell.The cheese is going to be another .</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Fruits Delivery</h3>
                    <div className="space-y-1 leading-tight">
                        <p>They are low in calories  their j</p>
                        <p>and naturally sweet. Fruits and</p>
                        <p>uices are good sources of water, too.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Vegetable Delivery</h3>
                    <div className="space-y-1 leading-tight">
                        <p>vegetables contain important vitamins. </p>
                        <p>minerals and plant chemicals.</p>
                        <p> They also contain fibre.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;