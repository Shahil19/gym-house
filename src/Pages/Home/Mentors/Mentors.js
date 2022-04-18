import React, { useEffect, useState } from 'react';
import Mentor from '../Mentor/Mentor';

const Mentors = () => {
    const [mentors, setMentors] = useState([]);
    useEffect(() => {
        fetch('fakeMentors.json')
            .then(res => res.json())
            .then(data => setMentors(data))
    }, [])
    return (
        <section id='instructor' className='mt-20'>
            <h2 className='text-5xl font-semibold text-center'>Instructors</h2>
            <div className='gap-y-5'>
                {
                    mentors.map(mentor => (
                        <Mentor
                            key={mentor.id}
                            mentor={mentor}
                        ></Mentor>
                    ))
                }
            </div>

        </section>
    );
};

export default Mentors;