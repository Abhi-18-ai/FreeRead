import React from 'react';
import banner from '../assets/book.png';
const Banner = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row '>
        <div className=' md:order-1 order-2 w-full md:w-1/2 pt-10  '>
          <h1 className='text-4xl md:text-5xl font-bold '>Read for free, anytime, anywhere</h1>
          <p className='text-lg md:text-xl py-6'>Discover a world of knowledge at your fingertips. Dive into our extensive collection of free books and articles, and let your imagination soar.</p>
          <button className='mt-5 bg-sky-300 text-black hover:bg-sky-400 px-4 py-2 rounded-3xl duration-300 cursor-pointer'>Explore Now</button>
        </div>
        <div className='order-1 w-92 h-92 md:w-1/2 flex justify-center items-center'>
          <img src={banner} alt="Banner Image" className='w-full h-full'/>
        </div>
      </div>
    </>

  )
}

export default Banner;