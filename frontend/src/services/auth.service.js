import { post } from './api.service'

export const login = (credentials) => post('/auth/login', credentials)

export const register = (userData) => post('/auth/register', userData)

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export const getCurrentUser = () => {
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

export const isAuthenticated = () => {
  return !!localStorage.getItem('token')
}
