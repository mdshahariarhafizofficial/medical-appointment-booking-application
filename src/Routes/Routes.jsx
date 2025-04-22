import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBookins/MyBookings';
import Blogs from '../Pages/Blogs/Blogs';
import ContactUs from '../Pages/ContactUs/ContactUs';

const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "my-bookings",
            Component: MyBookings
        },
        {
            path: "blogs",
            Component: Blogs
        },
        {
            path: 'contact-us',
            Component: ContactUs
        }
      ]
    }
  ])

export default router;