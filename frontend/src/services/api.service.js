const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }))
    throw new Error(error.message)
  }

  return response.json()
}

export const get = (endpoint) => request(endpoint)
export const post = (endpoint, data) => request(endpoint, { method: 'POST', body: JSON.stringify(data) })
export const put = (endpoint, data) => request(endpoint, { method: 'PUT', body: JSON.stringify(data) })
export const del = (endpoint) => request(endpoint, { method: 'DELETE' })
