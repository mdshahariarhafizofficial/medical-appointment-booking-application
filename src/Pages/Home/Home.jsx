import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Counter from '../../Components/Counter/Counter';
import Doctors from '../../Components/Doctors/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  
    return (
        <div className=''>
          <Hero></Hero>
          <Doctors data={data}></Doctors>
          <Counter></Counter>
        </div>
    );
};

export default Home;