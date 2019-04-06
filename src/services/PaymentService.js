import axios from 'axios'

const API_URL = 'http://localhost:3001'

const http = axios.create ({
  baseURL : API_URL,
  withCredentials: true
})


const paymentOrder = (id, payment) => http.post(`/orders/${id}/charge`, payment)

export default {
  paymentOrder
}
