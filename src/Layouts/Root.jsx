import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import Loader from '../Components/Loader/Loader';

const Root = () => {

    const [isLoading, setIsLoading]= useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        },500)
    },[])

    return (
        <>
                <Navbar></Navbar>
                <div className='bg-[#0F0F0F20]'>
                    <div className='min-h-[calc(100vh-382px)]'>
                        {
                            isLoading ? <Loader></Loader> : <Outlet></Outlet>
                        }
                    </div>
                </div>
                <Footer></Footer>
        </>
    );
};

export default Root;