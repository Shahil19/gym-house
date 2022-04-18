import React from 'react';
import Banner from '../Banner/Banner';
import Mentors from '../Mentors/Mentors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Mentors></Mentors>
        </div>
    );
};

export default Home;