import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  return (
    <div className='min-h-screen bg-gray-700 flex items-center justify-center px-4 py-12'>
      <div className='w-full max-w-md rounded-[2rem] border border-gray-600 bg-slate-900/95 p-10 shadow-2xl shadow-black/40'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold text-white'>Welcome back</h1>
          <p className='mt-2 text-sm text-gray-400'>Sign in to continue your free reading journey.</p>
        </div>

        {error && <div className='mb-4 rounded-3xl border border-red-500 bg-red-500/10 px-4 py-3 text-sm text-red-200'>{error}</div>}
        {success && <div className='mb-4 rounded-3xl border border-emerald-400 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100'>{success}</div>}

        <form
          className='space-y-6'
          onSubmit={(event) => {
            event.preventDefault()
            setError('')
            const users = JSON.parse(localStorage.getItem('users') || '[]')
            const matchingUser = users.find(
              (user) => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password
            )

            if (!matchingUser) {
              setError('Invalid email or password.')
              return
            }

            login(matchingUser)
            setSuccess('Login successful! Redirecting…')
            setTimeout(() => {
              navigate(from, { replace: true })
            }, 600)
          }}
        >
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-200'>Email address</label>
            <input
              type='email'
              id='email'
              name='email'
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className='mt-2 w-full rounded-3xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20'
            />
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-medium text-gray-200'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className='mt-2 w-full rounded-3xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20'
            />
          </div>

          <button
            type='submit'
            className='w-full rounded-3xl bg-sky-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-sky-400'
          >
            Sign In
          </button>
        </form>

        <p className='mt-6 text-center text-sm text-gray-400'>
          New around here?{' '}
          <Link to='/signup' className='font-semibold text-sky-300 hover:text-sky-200'>Create an account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login