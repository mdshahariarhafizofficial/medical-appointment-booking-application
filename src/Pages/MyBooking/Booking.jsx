import React from 'react';
const Booking = ({booking, handleDelete}) => {
    const {id,name, education, fee, specialty} = booking;

    return (
        <div>
            {/* Booking */}
            <div className="booking bg-white p-8 space-y-4 rounded-2xl">
                <h2 className='text-2xl font-bold'>{name}</h2>
                <div className='flex justify-between items-center border-b-2 border-dashed border-gray-300 pb-3'>
                    <p className='font-medium text-gray-600'>{education} - {specialty}</p>
                    <p className='font-medium text-gray-600'>Appointment Fee : {fee} Taka + Vat</p>
                </div>
                <button onClick={()=>handleDelete(id)} type="button" className="w-full text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Cancel Appointment</button>
            </div>

        </div>
    );
};

export default Booking;