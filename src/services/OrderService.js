
import http from './base-http-service';
import { BehaviorSubject } from 'rxjs';

const CURRENT_ORDER_KEY = 'current-order';

let order = JSON.parse(localStorage.getItem(CURRENT_ORDER_KEY) || '{}')
const order$ = new BehaviorSubject(order);

export const getTableById = (id) => http.get(`/tables/${id}`)
  .then(response => {
    order = response.data.orders;
    localStorage.setItem(CURRENT_ORDER_KEY, JSON.stringify(order));
    return order;
  });

export const onTableChange = () => table$.asObservable();

export default {
  getTableById,
  onTableChange
}

// export const getTable = () => http.get(`/tables`).then( response => response.data)
// export const createTable = () => http.post(`/tables`).then( response => response.data)
// export const getTableById = (id) => http.get(`/tables/${id}`).then(response => response.data) 
// export const updateTableById = (table) => http.put(`/tables/${table.id}`, table)
// export const deleteTableById = (table) => http.post(`/tables/${table.id}`, table)
