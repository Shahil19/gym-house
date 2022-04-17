import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState('');
    useEffect(() => {
        fetch('fakeGym.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2>Our Services: {services.length}</h2>

        </div>
    );
};

export default Services;