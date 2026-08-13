import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import FreeBook from './components/freebook'
import Login from './components/login'
import Register from './components/register'
import BookDetail from './components/BookDetail'
import RequireAuth from './components/RequireAuth'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className='min-h-screen bg-gray-700 text-white'>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Banner />
                  <FreeBook />
                </>
              }
            />
            <Route path='/books' element={<FreeBook />} />
            <Route path='/book/:id' element={<RequireAuth><BookDetail /></RequireAuth>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App