import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="text-center flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-12 bg-gradient-to-r from-violet-900 to-teal-400 rounded-md">
                <div className="text-2xl font-semibold">
                    <div className="text-white md:text-6xl text-5xl font-mono">MY BODY, MY MIND</div>
                    <div className="text-gray-900 mt-7">Our vision is to create a community of like-minded people who share in the mission of health and wellness for all.</div>
                </div>

                <div className="mt-3 md:mt-0 md:ml-2">
                    {/* <div className="inline-block rounded-md text-lg font-semibold py-2 px-4 text-white bg-purple-500">
                        Get Started
                    </div> */}
                    <img className='w-full rounded-sm' src="https://static.wixstatic.com/media/fee603_054c0827d5a742f4a99751e4426bb517~mv2.jpg/v1/fill/w_890,h_1005,fp_0.50_0.50,q_85,enc_auto/fee603_054c0827d5a742f4a99751e4426bb517~mv2.jpg" alt="" />
                </div>
            </div>
        </div >
    );
};

export default Banner;