import { post } from './api.service';

export async function login(credentials) {
  return post('/auth/login', credentials);
}

export async function register(userData) {
  return post('/auth/register', userData);
}

export function logout() {
  localStorage.removeItem('token');
}
