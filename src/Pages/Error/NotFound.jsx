import React from 'react';
import Navbar from '../../Components/Header/Navbar';

const NotFound = () => {
    return (
        <>
            <Navbar></Navbar>
            <h1 className='text-red-500 font-4xl text-center'>404 Not Found</h1>
        </>
    );
};

export default NotFound;