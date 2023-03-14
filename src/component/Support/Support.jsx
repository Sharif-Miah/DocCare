import React from 'react'
import Supprt from '../../assets/support_girl.png';
// import './Support';

const Support = () => {
  return (
    <div className='mt-8'>
        <h1 className='text-center text-5xl font-bold'>Support</h1>
        <div className='flex justify-evenly'>
            <div className='mt-56'>
                <h3 className='text-cyan-400 text-2xl mb-5 font-bold'>Top Notch Support</h3>
                <h1 className='text-4xl font-bold text-blue-800 mb-5'>24/7 Super-Fast Support</h1>
                <p className='text-black text-xl mb-5'>Conact our effective 24/7 support team to get professional help <br /> with every question concerning Doccure theme</p>
                <button className='px-4 py-2 bg-cyan-700 rounded-3xl text-white text-xl hover:bg-cyan-500 mr-3'>Documenttaion</button>
                <button className='px-5 py-2 bg-cyan-700 rounded-3xl text-white text-xl hover:bg-cyan-500 mr-3'>Supprt</button>
            </div>
            <div>
                <img src={Supprt} alt="" className=''/>
            </div>
        </div>
    </div>
  )
}

export default Support