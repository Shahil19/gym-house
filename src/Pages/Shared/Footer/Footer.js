import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='mt-3 bg-gray-800 py-3 flex justify-evenly items-center'>
            <h2 className='text-white font-semibold text-2xl '>Pump House</h2>
            <p className='text-white'>&copy;All Rights Reserved {year} | SHAHIL</p>
        </footer>
    );
};

export default Footer;