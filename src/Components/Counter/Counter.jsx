import React from 'react';
import cardImg1 from '../../assets/success-doctor.png'
import cardImg2 from '../../assets/success-review.png'
import cardImg3 from '../../assets/success-patients.png'
import cardImg4 from '../../assets/success-staffs.png'
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div className='max-w-[1281px] mx-auto py-20 px-5 lg:px-0 space-y-8'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl font-extrabold'>We Provide Best Medical Services</h2>
                <p className='text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>

            <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className='space-y-5 bg-white p-8 rounded-xl'>
                    <img src={cardImg1} alt="" />
                    <h2 className='text-5xl font-bold'>
                        <CountUp
                            end={199}
                            duration={15}
                        ></CountUp>
                        +</h2>
                    <p className='text-[#0F0F0F90] font-semibold'>Total Doctors</p>
                </div>
                <div className='space-y-5 bg-white p-8 rounded-xl'>
                    <img src={cardImg2} alt="" />
                    <h2 className='text-5xl font-bold'>
                        <CountUp
                            end={467}
                            duration={15}
                        ></CountUp>
                        +</h2>
                    <p className='text-[#0F0F0F90] font-semibold'>Total Reviews</p>
                </div>
                <div className='space-y-5 bg-white p-8 rounded-xl'>
                    <img src={cardImg3} alt="" />
                    <h2 className='text-5xl font-bold'>
                        <CountUp
                            end={1900}
                            duration={15}
                        ></CountUp>
                        +</h2>
                    <p className='text-[#0F0F0F90] font-semibold'>Patients</p>
                </div>
                <div className='space-y-5 bg-white p-8 rounded-xl'>
                    <img src={cardImg4} alt="" />
                    <h2 className='text-5xl font-bold'>
                        <CountUp
                            end={300}
                            duration={15}
                        ></CountUp>
                        +</h2>
                    <p className='text-[#0F0F0F90] font-semibold'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;