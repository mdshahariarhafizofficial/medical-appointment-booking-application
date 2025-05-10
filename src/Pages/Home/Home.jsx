import React, { useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import Counter from '../../Components/Counter/Counter';
import Doctors from '../../Components/Doctors/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
  const doctors = useLoaderData();
  const [data, setData] = useState(doctors);
  const handleSearch = (e, search)=>{
    e.preventDefault();
    const searchResult = doctors.filter(doctor => doctor.name.toLowerCase().includes(search.toLowerCase()));
    setData(searchResult)
  }
  
    return (
        <div className=''>
          <Hero handleSearch={handleSearch}></Hero>
          <Doctors data={data}></Doctors>
          <Counter></Counter>
        </div>
    );
};

export default Home;