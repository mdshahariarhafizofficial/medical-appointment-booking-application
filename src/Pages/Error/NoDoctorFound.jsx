import React from 'react';
import { MdOutlineLocalHospital } from 'react-icons/md';
import { Link, useParams } from 'react-router';

const NoDoctorFound = () => {
    const params = useParams();
    const {reg} = params;
    

    return (
        <div className='max-w-[1281px] mx-auto py-8 px-5 lg:px-0'>
            <div className='bg-white flex flex-col text-center p-6 md:p-14 gap-6 my-6 rounded-2xl'>
                <h2 className='text-4xl font-extrabold'>No Doctor Found!!</h2>
                <p className="text-base text-gray-500 mb-2">No Doctor Found with this registration No -</p>
                <p className="text-base text-gray-500 flex justify-center items-center gap-2">
                    {<MdOutlineLocalHospital size={25} />} Reg No: {reg}
                </p>
                <Link to='/'>
                    <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">View All Doctor</button>
                </Link>
            </div>
        </div>
    );
};

export default NoDoctorFound;