import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakeGym.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services);
    return (
        <section className='mt-10 mx-10'>
            <h2>Our Services: {services.length}</h2>
            <div className='grid grid-cols-3 gap-6'>
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