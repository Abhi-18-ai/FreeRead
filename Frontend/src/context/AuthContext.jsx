import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './authStore'

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

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
    isAuthenticated: Boolean(currentUser),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
