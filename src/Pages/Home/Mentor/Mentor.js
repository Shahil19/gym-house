import React from 'react';

const Mentor = ({ mentor }) => {
    const { name, img, description, title } = mentor;
    return (
        <div className='w-4/5 lg:w-3/4 mx-auto'>
            <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20 ">
                <div className="flex justify-center md:justify-end -mt-16">
                    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={img} alt='' />
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
                    <p className="mt-2 text-gray-600">{description}</p>
                </div>
                <div className="flex justify-end mt-4">
                    <p className="text-xl font-medium text-indigo-500">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default Mentor;