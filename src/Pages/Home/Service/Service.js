import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, description, sessionPrice, img } = service;
    const navigate = useNavigate();
    const handleCheckOut = service => {
        navigate('/checkout')
    }
    return (
        <div className="flex items-center justify-center p-7 rounded-xl bg-gradient-to-bl from-violet-900 to-teal-400">
            <div className="py-8 px-4 w-96 cursor-pointer rounded-xl bg-gray-100 hover:drop-shadow-2xl">
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
                    <p className='text-2xl font-medium'>Session Price: <span className='font-bold'>${sessionPrice}</span></p>
                </div>
                <div className="text-center mt-7">
                    <button onClick={() => handleCheckOut(service)} className="rounded-xl bg-black px-24 py-2 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;