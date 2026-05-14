import { post } from './api.service';

export async function processPayment(paymentData) {
  return post('/payments/process', paymentData);
}

export async function getPaymentStatus(paymentId) {
  return post('/payments/status', { paymentId });
}
