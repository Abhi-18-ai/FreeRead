import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='bg-gray-700 shadow-md sticky top-0 z-10'>
      <div className='max-w-7xl mx-auto px-4 flex items-center justify-between h-16'>
        {/* name */}
        <div className='text-white text-2xl font-bold'>FreeRead</div>
        <div className='flex justify-between items-center space-x-6 text-sm '>
          <ul>
            <li>CONTACT</li>
            <li>ABOUT US</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar