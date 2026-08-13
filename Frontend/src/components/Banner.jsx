import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/book.png';
const Banner = () => {
  return (
    <section className='bg-gray-700'>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-14'>
        <div className='overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.3)] md:flex md:items-center'>
          <div className='order-2 w-full md:order-1 md:w-1/2 md:pr-10'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Read for free, anytime, anywhere</h1>
            <p className='text-lg md:text-xl py-6 text-gray-600'>Discover a world of knowledge at your fingertips. Dive into our extensive collection of free books and articles, and let your imagination soar.</p>
            <Link
              to='/login'
              className='mt-5 inline-flex rounded-3xl bg-sky-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400'
            >
              Explore Now
            </Link>
          </div>
          <div className='order-1 mb-8 flex w-full justify-center md:order-2 md:mb-0 md:w-1/2'>
            <img src={banner} alt='Banner Image' className='w-full max-w-lg object-contain' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;