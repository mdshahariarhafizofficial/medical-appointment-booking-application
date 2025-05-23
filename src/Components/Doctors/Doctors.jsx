import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import { FaUserDoctor } from 'react-icons/fa6';

const Doctors = ({data}) => {
    const [doctors, setDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(()=>{
        showAll? setDoctors(data): setDoctors(data.slice(0,6))
    },[showAll, data])

    return (
        <div className='max-w-[1281px] mx-auto pt-20 px-5 lg:px-0'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl font-extrabold'>Our Best Doctors</h2>
                <p className='text-[#0F0F0F]'>Our team of top-rated doctors combines years of experience, advanced medical knowledge, and a deep commitment to patient care.<br/> Each of them is dedicated to providing personalized, compassionate treatment to help you live a healthier life.</p>
            </div>
            {/* Not Found */}
            <div className={`${doctors.length > 0 && 'hidden'} text-center space-y-5 bg-white py-10 px-5 rounded-2xl my-8`}>
                <FaUserDoctor className='mx-auto' size={90} color='#2050FF'></FaUserDoctor>
                <h2 className='text-5xl font-black'>Doctor Not Found!</h2>
                <p className='text-blue-600 font-semibold'>" Please Search Valid Doctor Name "</p>
            </div>

            {/* Doctors */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor = {doctor}
                    ></Doctor>)
                }
            </div>
            <div className={`${doctors.length < 6 ? 'hidden': ''} text-center py-4`}>
                <button onClick={()=>{
                    setShowAll(!showAll)
                    showAll && window.scrollTo(0, 900)
                    }} type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{showAll? 'View Less Doctors':'View All Doctors'}</button>
            </div>
        </div>
    );
};

export default Doctors;