import { useState, useCallback } from 'react'
import { login as loginApi, logout as logoutApi, getCurrentUser } from '../services/auth.service'

function useAuth() {
  const [user, setUser] = useState(getCurrentUser())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = useCallback(async (credentials) => {
    setLoading(true)
    setError(null)
    try {
      const data = await loginApi(credentials)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      setUser(data.user)
      return data
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    logoutApi()
    setUser(null)
  }, [])

  return { user, login, logout, loading, error }
}

export default useAuth
