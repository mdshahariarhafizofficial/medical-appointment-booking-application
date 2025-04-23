import React, { } from 'react';
import { BiRegistered } from 'react-icons/bi';
import { PiWarningOctagon } from 'react-icons/pi';
import { Link, useLoaderData, useParams } from 'react-router';
import { addDataToLocalStorage } from '../../Utility/localStorage';
import { toast } from 'react-toastify';


const DoctorDetails = () => {
    const doctors = useLoaderData();
    const {reg} = useParams()
    const doctorDetails = doctors.find(doctor => doctor.registrationNumber === reg);
    const {name, education, designation, workplace, fee, availability, experience, gender, specialties, image, registrationNumber} = doctorDetails;
    const handleBooking = ()=>{
        addDataToLocalStorage(doctorDetails)
        toast.success(`Appointment Schedule for ${name} Successful!`)        
    }

    return (
        <div className='max-w-[1281px] mx-auto py-8 px-5 lg:px-0'>
            <div className='text-center space-y-4 p-6 md:p-16 bg-white rounded-xl'>
                <h2 className='text-4xl font-extrabold'>Doctor’s Profile Details</h2>
                <p className='text-[#0F0F0F]'>
                With over <span className='text-lg font-bold text-blue-600'>{experience}</span> of experience, <span className='text-lg font-bold text-blue-600'>{name}</span> is dedicated to providing compassionate, patient-centered care. {gender === 'Male'? 'He': 'She'} specialize in <span className='text-lg font-bold text-blue-600'>{specialties}</span>, and is committed to helping patients achieve better health through personalized treatment plans.
                </p>
            </div>

            <div className='bg-white flex flex-col md:flex-row p-6 md:p-14 gap-6 my-6 rounded-2xl'>
                <div className='lg:w-1/3'>
                    <img className='w-full h-full object-cover rounded-xl' src={image} alt="" />
                </div>
                <div className='space-y-4 lg:w-2/3'>
                    <h2 className='text-4xl font-extrabold'>{name}</h2>
                    <p className="text-base text-gray-500 mb-2">{education}</p>
                    <div className='flex gap-3'>
                        <p className="text-base text-gray-500 mb-2">{specialties}</p>
            
                    </div>
                    <div>
                        <p className="text-base text-gray-500 mb-2">Working at :</p>
                        <h2 className='text-xl font-bold'>{workplace}</h2>
                        <p className="text-base text-gray-500 mb-2">{designation}</p>
                    </div>
                    <div className='py-3 border-y-2 border-dashed border-gray-300'>
                        <p className="text-base text-gray-500 flex items-center gap-3">
                        {<BiRegistered size={22}></BiRegistered>} Reg No: {registrationNumber}
                        </p>
                    </div>
                    <div className='flex gap-4 items-center'>
                       <h2 className='text-xl font-semibold'>Availability</h2>
                       {
                        availability.map(d => <div key={d} className="badge rounded-full text-[#FFB539] bg-[#FFB53930] p-3">{d}</div>)
                       } 
                    </div>
                    <p>
                        <span className='text-lg font-bold'>Consultation Fee: </span>
                        <span className='text-blue-500 font-medium'>Taka: {fee} </span>
                        <span className='text-gray-500 font-medium'> (incl. Vat) </span>
                        <span className='text-blue-500 font-medium'> Per consultation</span>
                    </p>
                </div>
            </div>
            
            <div className='text-center space-y-4 p-6 md:p-16 bg-white rounded-xl'>
                <h2 className='text-4xl font-extrabold'>Book an Appointment</h2>
                <div className='flex flex-col md:flex-row justify-between items-center py-4 border-t-2 border-dashed border-gray-300 border-b-2 border-b-black'>
                    <h1 className='text-2xl font-bold'>Availability</h1>
                    <div className="badge rounded-full text-[#09982F] bg-[#09982F30] p-3">
                        Doctor Available Today   
                    </div>
                </div>
                <div>
                <div className="badge h-auto md:h-16 lg:h-10 flex items-center gap-1 rounded-full text-[#FFB539] bg-[#FFB53930] p-2 my-10">
                    <span>
                        <PiWarningOctagon size={25}></PiWarningOctagon>
                    </span>
                    <p>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>

                <Link to='/my-bookings'>
                        <button onClick={handleBooking} className="mt-5 w-full rounded-full bg-blue-600 text-white font-semibold hover:text-black hover:bg-transparent py-2 px-4 border border-blue-500 hover:border">Book Appointment Now</button>
                </Link>
                </div>
            </div>

        </div>
    );
};

export default DoctorDetails;