import axios from 'axios'

const API_URL = 'http://localhost:3001'

const http = axios.create ({
  baseURL : API_URL,
  withCredentials: true
})

export const firebaseWaiters = (waiter) => http.put(`/waiters/${waiter.id}`, waiter)
// cuando el camarero abra su pagina tenemos que guardar su token para las notificaciones push