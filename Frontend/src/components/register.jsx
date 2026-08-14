import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Register = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { signup } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (!fullname.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    setIsLoading(true)
    try {
      await signup(fullname.trim(), email.trim().toLowerCase(), password)
      setSuccess('Account created successfully! Redirecting to login...')
      setTimeout(() => {
        navigate('/login')
      }, 1200)
    } catch (err) {
      setError(err.message || 'Failed to create account. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-700 flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-md rounded-[2rem] border border-gray-600 bg-slate-900/95 p-10 shadow-2xl shadow-black/40'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold text-white'>Create an account</h1>
          <p className='mt-2 text-sm text-gray-400'>Sign up to start your free reading journey.</p>
        </div>

        {error && <div className='mb-4 rounded-3xl border border-red-500 bg-red-500/10 px-4 py-3 text-sm text-red-200'>{error}</div>}
        {success && <div className='mb-4 rounded-3xl border border-emerald-400 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100'>{success}</div>}

        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='fullname' className='block text-sm font-medium text-gray-200'>Full Name</label>
            <input
              id='fullname'
              name='fullname'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
              disabled={isLoading}
              className='mt-2 w-full rounded-3xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 disabled:opacity-50'
              placeholder='Enter your full name'
            />
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-200'>Email address</label>
            <input
              id='email'
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className='mt-2 w-full rounded-3xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 disabled:opacity-50'
              placeholder='you@example.com'
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-200'>Password</label>
            <input
              id='password'
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className='mt-2 w-full rounded-3xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 disabled:opacity-50'
              placeholder='Enter a secure password'
            />
          </div>

          <button
            type='submit'
            disabled={isLoading}
            className='w-full rounded-3xl bg-sky-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-sky-400 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p className='mt-6 text-center text-sm text-gray-400'>
          Already have an account?{' '}
          <Link to='/login' className='font-semibold text-sky-300 hover:text-sky-200'>Log in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register