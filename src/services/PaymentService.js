import axios from 'axios'
import http from './base-http-service';


const paymentOrder = (id, payment) => http.post(`/orders/${id}/charge`, payment)

export default {
  paymentOrder
}
