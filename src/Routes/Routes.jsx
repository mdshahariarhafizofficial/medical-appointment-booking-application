import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBooking/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import DoctorDetails from '../Pages/DoctorsDetails/DoctorDetails';
import NotFound from '../Pages/Error/NotFound';

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <NotFound></NotFound>,
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
            Component: Blogs,
            loader: ()=> fetch('../blogs.json')
        },{
          path: '/doctor/:reg',
          Component: DoctorDetails,
          loader: ()=> fetch('../doctors.json'),
          errorElement: <p>No Doctor Found!</p>,
        },
      ]
    }
  ])

export default router;