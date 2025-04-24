import React from "react";
import { BiRegistered } from "react-icons/bi";
import { Link } from "react-router";

const Doctor = ({ doctor }) => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];

    const {image, name, education, experience, registrationNumber, availability, specialty} = doctor;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-6 space-y-4 rounded-xl">
        <figure className="">
          <img className="w-full h-[248px] object-cover rounded-xl"
            src={image}
            alt="doctor"
          />
        </figure>
        <div className="card-actions">
          {
            availability.find(aDay => aDay === day) ?  <div className="badge rounded-full text-[#09982F] bg-[#09982F30] p-3">Available</div> : <div className="badge rounded-full text-[#FFB539] bg-[#FFB53930] p-3">Not Available</div>
            
          }
            <div className="badge text-[#176AE5] bg-[#176AE530] p-3 rounded-full">{experience}  experience</div>
          </div>
        <div className="">
          <h2 className="card-title text-2xl font-extrabold">
            {name}
          </h2>
          <p className="text-base text-gray-500 mb-2">
            {education} - {specialty}
          </p>
          <div className="py-2 border-t-2 border-dashed border-gray-300">
            <p className="text-base text-gray-500 flex items-center gap-3">
                {<BiRegistered size={22}></BiRegistered>} Reg No: {registrationNumber}
            </p>
            <Link onClick={()=> window.scrollTo(0, 100)} to={`/doctor/${registrationNumber}`}>
                <button className="mt-5 w-full rounded-full bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
