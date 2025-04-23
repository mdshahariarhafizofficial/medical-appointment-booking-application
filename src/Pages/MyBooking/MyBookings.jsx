import React, { useEffect, useState } from "react";
import { getDataFromLocalStorage, removeDataFromLocalStorage } from "../../Utility/localStorage";
import Booking from "./Booking";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const savedBookings = getDataFromLocalStorage();
    setBookings(savedBookings);
  }, []);
    const handleDelete = (id)=>{
      removeDataFromLocalStorage(id)
      setBookings(getDataFromLocalStorage())
    }

  return (
    <div className="max-w-[1281px] mx-auto py-8 px-5 lg:px-0">
      {/* Rechart */}
      <div className={`${bookings.length === 0? 'hidden': ''} bg-white py-12 rounded-2xl`}>
      <ResponsiveContainer width="95%" height={400}>
        <BarChart
        data={bookings}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
        <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {bookings.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
        </BarChart>
      </ResponsiveContainer>
      </div>

      {/* Title */}
      <div className={`${bookings.length === 0? 'hidden': ''} text-center space-y-4 my-8`}>
        <h2 className="text-4xl font-extrabold">My Today Appointments</h2>
        <p className="text-[#0F0F0F]">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      
        {/* No booking */}
        <div className={`${bookings.length > 0? 'hidden': ''} text-center space-y-4 my-8`}>
          <h2 className="text-4xl font-extrabold">You Have not Booked any appointment yet</h2>
          <p className="text-[#0F0F0F]">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>

          <Link to='/'>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Book an Appointment</button>
          </Link>
        </div>

      {/* Bookings */}
      <div className="flex flex-col gap-6">
        {bookings.map((booking) => (
          <Booking 
          key={booking.id}
          booking={booking}
          handleDelete = {handleDelete}
          ></Booking>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
