import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakeGym.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section id='service' className='mt-10 mx-10'>
            <h2 className='text-4xl font-bold my-10 text-center text-fuchsia-800 from-violet-900 to-teal-400'>Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </section>
    );
};

export default Services;