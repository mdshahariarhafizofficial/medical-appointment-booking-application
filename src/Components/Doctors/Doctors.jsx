import React from 'react';
import Doctor from './Doctor';

const Doctors = ({data}) => {

    return (
        <div className='max-w-[1281px] mx-auto py-20 px-5 lg:px-0'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl font-extrabold'>Our Best Doctors</h2>
                <p className='text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br/> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            {/* Doctors */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8'>
                {
                    data.map(doctor => <Doctor
                        key={doctor.id}
                        doctor = {doctor}
                    ></Doctor>)
                }
            </div>
            <div className='text-center py-4'>
                <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View All Doctors</button>
            </div>
        </div>
    );
};

export default Doctors;