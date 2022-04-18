import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center mt-10'>This is blog</h1>
            <div className='w-4/5 lg:w-3/4 mx-auto'>
                <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-16 ">
                    <div>
                        <h2 className="text-gray-800 text-2xl font-semibold"> <span className='font-bold'>Question.1</span> Difference between `authorization` and `authentication`?</h2>
                        <p className="mt-2 text-gray-800 text-xl"><span className='font-bold text-black'>Answer:</span></p>
                        <p className="mt-2 text-gray-900 text-xl">Authentication is the first step of a good identity and access management process. For Example By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>
                        <p className="mt-2 text-gray-900 text-xl">Where else Authorization determines what resources a user can access. Authorization always takes place after authentication. For example Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</p>
                    </div>
                </div>
            </div>
            <div className='w-4/5 lg:w-3/4 mx-auto'>
                <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-16 ">
                    <div>
                        <h2 className="text-gray-800 text-2xl font-semibold"> <span className='font-bold'>Question.2</span> Why are you using `firebase`? What other options do you have to implement authentication??</h2>
                        <p className="mt-2 text-gray-900 text-xl"><span className='font-bold text-black'>Answer:</span> Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                        <p className="mt-2 text-gray-900 text-xl">The other options can be for authentication are Back4App,Couchbase,NativeScript,AWS Amplify,Flutter etc.</p>
                    </div>
                </div>
            </div>
            <div className='w-4/5 lg:w-3/4 mx-auto'>
                <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-16 ">
                    <div>
                        <h2 className="text-gray-800 text-2xl font-semibold"> <span className='font-bold'>Question.3</span> What other services does `firebase` provide other than authentication</h2>
                        <p className="mt-2 text-gray-900 text-xl"><span className='font-bold text-black'>Answer:</span> Website hosting.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blogs;