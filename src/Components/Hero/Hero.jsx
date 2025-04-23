import React from 'react';
import bannerImg1 from "../../assets/banner-img-1.png"
import bannerImg2 from "../../assets/doctor-grp.jpg"

const Hero = () => {
    return (
        <div className='md:px-14 pb-10'>
            <div className='bg-linear-to-t from-[white] to-[#0F0F0F1] text-center p-5 md:p-16 border-2 border-white rounded-3xl space-y-4'>
                <h2 className='text-5xl font-bold'>Dependable Care, Backed by Trusted <br/> Professionals.</h2>
                <p className='text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br/> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                {/* Form */}
                <form className='md:max-w-[800px] mx-auto flex gap-6 flex-col md:flex-row'>
                    <input className='lg:w-[80%] md:w-[70%] h-13 bg-white rounded-full px-5 focus:outline-0 focus:shadow-xl' type="text" placeholder='Search any doctor...' />
                    <button type="submit" className="md:w-[30%] lg:w-[20%] h-13 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Search Now</button>
                </form>
                <div className='flex gap-6 flex-col lg:flex-row justify-center'>
                    <img src={bannerImg1} alt="" />
                    <img className='lg:w-[578px] md:w-full lg:h-[350px] object-cover rounded-2xl' src={bannerImg2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;