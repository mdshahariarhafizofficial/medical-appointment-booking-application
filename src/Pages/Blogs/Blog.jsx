import React from 'react';
import { MdDateRange } from 'react-icons/md';

const Blog = ({data}) => {
    const {heading, date, body} = data;
    return (
        <div className='bg-white p-8 rounded-2xl space-y-4'>
            <h1 className='text-3xl font-bold'>{heading}</h1>
            <div className='border-y-2 border-dashed border-gray-300 py-5'>
                <p className='text-xl font-bold text-blue-600'>Answer:</p>
                <p className='text-gray-600'>{body}</p>
            </div>
            <div className='flex items-center gap-3'>
                <span>
                    <MdDateRange size={25} color='gray' />
                </span>
                <p className='font-semibold text-gray-600'>{date}</p>
            </div>
        </div>
    );
};

export default Blog;