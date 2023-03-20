import React from 'react'

const MedacalHealth = () => {
  return (
    <div className='bg-sky-800 py-10'>
      
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-100">Get Our Updates</h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">Find out about events and other news</p>
          <div className="flex flex-row">
            <input type="text" placeholder="example@email.com" className="input input-bordered w-full pr-16 text-black" />
            <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-700 ml-4 text-white ">Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default MedacalHealth