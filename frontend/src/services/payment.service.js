/* ── Payment Service ── */

import { api } from './api.service';

export const paymentService = {
  createPaymentIntent: (amount) => api.post('/payments/intent', { amount }),
  getPaymentHistory: () => api.get('/payments/history'),
  processRefund: (paymentId) => api.post(`/payments/${paymentId}/refund`),
};
