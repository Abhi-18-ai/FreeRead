import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'FreeBooks', to: '/books' },
    { label: 'Login', to: '/login' },
    { label: 'Register', to: '/signup' },
  ]

  return (
    <nav className='bg-gray-700 shadow-md sticky top-0 z-10'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* name */}
          <div className='text-white text-2xl font-bold'>FreeRead</div>

          {/* search bar */}
          <form className='hidden md:flex items-center space-x-2' onSubmit={(e) => {
            e.preventDefault()
            const trimmed = searchTerm.trim()
            if (trimmed) {
              navigate(`/books?search=${encodeURIComponent(trimmed)}`)
            } else {
              navigate('/books')
            }
            setSearchTerm('')
          }}>
            <label className='input'>
              <svg className='h-[1em] opacity-50' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <g
                  strokeLinejoin='round'
                  strokeLinecap='round'
                  strokeWidth='2.5'
                  fill='none'
                  stroke='currentColor'
                >
                  <circle cx='11' cy='11' r='8'></circle>
                  <path d='m21 21-4.3-4.3'></path>
                </g>
              </svg>
              <input
                type='search'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder='Search books...'
                aria-label='Search books'
                className='rounded-full border border-gray-600 bg-slate-900 px-3 py-2 text-white outline-none'
              />
            </label>
          </form>

          {/* navigation links */}
          <div className='flex justify-between items-center space-x-4 mr-4'>
            <ul className='hidden md:flex items-center space-x-4 text-lg font-medium'>
              {navItems.map((item) => (
                <li key={item.to} className='text-white hover:text-gray-300'>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>

            {/* mobile view */}
            <div className='md:hidden'>
              <button
                type='button'
                className='text-white focus:outline-none rounded-md p-1 hover:bg-gray-700 transition-colors'
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-expanded={isMenuOpen}
                aria-label='Toggle navigation menu'
              >
                {isMenuOpen ? (
                  <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                  </svg>
                ) : (
                  <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden border-t border-gray-600 bg-gray-700 px-4 py-3 animate-fade-in'>
          <ul className='flex flex-col space-y-3 text-white text-lg font-medium'>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className='block rounded-md px-2 py-2 hover:bg-gray-600 hover:text-gray-100 transition-colors'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;