import { post } from './api.service'

export const createPayment = (paymentData) => post('/payments/create', paymentData)

export const verifyPayment = (paymentId) => post('/payments/verify', { paymentId })
