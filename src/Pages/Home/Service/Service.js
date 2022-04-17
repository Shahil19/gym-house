import React from 'react';

const Service = ({ service }) => {
    const { name, description, sessionPrice, img } = service;
    return (
        <div className="flex items-center justify-center p-7 rounded-xl bg-gradient-to-bl from-violet-900 to-teal-400">
            <div className="py-8 px-4 w-96 cursor-pointer rounded-xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
                <div className="text-center">
                    <h3 className="text-center text-4xl font-bold">{name}</h3>
                    {/* <span className="text-sm">Shooting Guard</span> */}
                </div>
                <div className='mt-4'>
                    <img className='rounded-xl' src={img} alt="shahil" />
                </div>
                <div className='mt-4 text-xl'>
                    {description}
                </div>
                <div className='mt-4'>
                    <p className='text-2xl font-semibold'>Session Price: <span className='font-bold'>${sessionPrice}</span></p>
                </div>
                <div className="text-center mt-7">
                    <button className="rounded-xl bg-black px-24 py-2 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;