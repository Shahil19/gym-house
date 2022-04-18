import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ResetPassword = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const resetPassword = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        console.log(email);
        await sendPasswordResetEmail(email);
    }
    return (
        <section >
            <h3 className='text-5xl font-bold text-center my-10'>Reset Your Password</h3>
            <form onSubmit={resetPassword} className='w-2/4 mx-auto'>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email" required />
                <button type="submit" className='mt-3 text-white w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 ' >Log In</button>
            </form>
        </section>
    );
};

export default ResetPassword;