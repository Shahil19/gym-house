import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="text-center flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-12 bg-purple-100 rounded-md">
                <div class="text-2xl font-semibold">
                    <div class="text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div class="text-purple-500">Start your Free Trial.</div>
                </div>

                <div class="mt-3 md:mt-0 md:ml-2">
                    {/* <div class="inline-block rounded-md text-lg font-semibold py-2 px-4 text-white bg-purple-500">
                        Get Started
                    </div> */}
                    <img className='w-full' src="https://static.wixstatic.com/media/fee603_054c0827d5a742f4a99751e4426bb517~mv2.jpg/v1/fill/w_890,h_1005,fp_0.50_0.50,q_85,enc_auto/fee603_054c0827d5a742f4a99751e4426bb517~mv2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;