import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBooking/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import DoctorDetails from '../Pages/DoctorsDetails/DoctorDetails';
import NotFound from '../Pages/Error/NotFound';
import NoDoctorFound from '../Pages/Error/NoDoctorFound';
import Loader from '../Components/Loader/Loader';

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            index: true,
            Component: Home,
            hydrateFallbackElement: <Loader></Loader>,
            loader: ()=> fetch('../doctors.json')
        },
        {
            path: "my-bookings",
            Component: MyBookings
        },
        {
            path: "blogs",
            Component: Blogs,
            loader: ()=> fetch('../blogs.json'),
            hydrateFallbackElement: <Loader></Loader>,
        },{
          path: '/doctor/:reg',
          Component: DoctorDetails,
          loader: ()=> fetch('../doctors.json'),
          hydrateFallbackElement: <Loader></Loader>,
          errorElement: <NoDoctorFound></NoDoctorFound>,
        },
      ]
    }
  ])

export default router;