import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './authStore'
import api from '../config/api'

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    if (!savedUser) return

    try {
      const parsed = JSON.parse(savedUser)
      if (parsed) {
        setCurrentUser(parsed)
      }
    } catch {
      localStorage.removeItem('currentUser')
    }
  }, [])

  const signup = async (fullname, email, password) => {
    setLoading(true)
    try {
      const response = await api.post('/user/signup', {
        fullname,
        email,
        password,
      })
      const user = response.data.user
      localStorage.setItem('currentUser', JSON.stringify(user))
      setCurrentUser(user)
      return response.data
    } catch (error) {
      throw error.response?.data || new Error('Signup failed')
    } finally {
      setLoading(false)
    }
  }

  const loginUser = async (email, password) => {
    setLoading(true)
    try {
      const response = await api.post('/user/login', {
        email,
        password,
      })
      const user = response.data.user
      localStorage.setItem('currentUser', JSON.stringify(user))
      setCurrentUser(user)
      return response.data
    } catch (error) {
      throw error.response?.data || new Error('Login failed')
    } finally {
      setLoading(false)
    }
  }

  const login = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user))
    setCurrentUser(user)
  }

  const logout = () => {
    localStorage.removeItem('currentUser')
    setCurrentUser(null)
  }

  const value = {
    currentUser,
    login,
    logout,
    signup,
    loginUser,
    isAuthenticated: Boolean(currentUser),
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
