import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBooking/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import DoctorDetails from '../Pages/DoctorsDetails/DoctorDetails';

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <p>404 not found!</p>,
      children: [
        {
            index: true,
            Component: Home,
            hydrateFallbackElement: <p>Loading....</p>,
            loader: ()=> fetch('../doctors.json')
        },
        {
            path: "my-bookings",
            Component: MyBookings
        },
        {
            path: "blogs",
            Component: Blogs
        },{
          path: '/doctor/:reg',
          Component: DoctorDetails,
          loader: ()=> fetch('../doctors.json')
        },
      ]
    }
  ])

export default router;