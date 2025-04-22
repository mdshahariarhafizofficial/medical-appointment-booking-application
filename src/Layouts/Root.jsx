import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <>
                <Navbar></Navbar>
                <div className='bg-[#0F0F0F20]'>
                    <div className='min-h-[calc(100vh-382px)]'>
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer></Footer>
        </>
    );
};

export default Root;