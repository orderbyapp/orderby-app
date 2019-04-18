import http from './base-http-service';

export const getWaiterById = (id) => http.get(`/waiters/${id}`).then(response => response.data) 
export const firebaseWaiters = (waiter) => http.put(`/waiters/${waiter.id}`, waiter)

export default {
  getWaiterById,
  firebaseWaiters
}
