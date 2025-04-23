import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from './blog';

const Blogs = () => {
    const blogs = useLoaderData()
    
    return (
        <div className='max-w-[1281px] mx-auto py-8 px-5 lg:px-0'>
            <div className='flex flex-col gap-6'>
                {
                    blogs.map(data => <Blog 
                        key={data.id}
                        data ={data}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;