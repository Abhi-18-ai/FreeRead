import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </Router>
  )
}

export default App;