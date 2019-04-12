import http from './base-http-service';
import { BehaviorSubject } from 'rxjs';

const CURRENT_TABLE_KEY = 'current-table';

let table = JSON.parse(localStorage.getItem(CURRENT_TABLE_KEY) || '{}')
const table$ = new BehaviorSubject(table);

export const getTableById = (id) => http.get(`/tables/${id}`)
  .then(response => {
    table = response.data;
    table.orders = [];
    localStorage.setItem(CURRENT_TABLE_KEY, JSON.stringify(table));
    table$.next(table);
    return table;
  });
export const getMenuList = (name) => http.get(`/menulist/${name}`)
  .then(response => response )

export const getTables = () => http.get(`/tables`)
  .then(response => response )

export const newOrder = (id, order) => http.post(`/orders/${id}`, order)
  .then(response => response )
export const callWaiter = (id, call) => http.post(`/tables/call/${id}`, call)
  .then(response => response )

export const updateOrder = (id, order) => http.put(`/orders/${id}`, order)
  .then(response => response )
  
export const updateTable = (newTable) => {
  localStorage.setItem(CURRENT_TABLE_KEY, JSON.stringify(newTable));
  table$.next(newTable);
}
// export const updateWaiterTable = (id, newTable) => http.put(`/tables/${id}`, newTable)
//   .then(response => {
//     table = response.data;
//     localStorage.setItem(CURRENT_TABLE_KEY, JSON.stringify(table));
//     table$.next(table);
//     return table;
//   });

export const cleanTable = (table) => {
  const cleanTable = {
    ...table,
    orders : [],
    orderId : ''
  }

  localStorage.setItem(CURRENT_TABLE_KEY, JSON.stringify(cleanTable));
  table$.next(cleanTable);
}

export const onTableChange = () => table$.asObservable();

export default {
  getTableById,
  getMenuList,
  newOrder,
  onTableChange,
  updateTable,
  updateOrder,
  cleanTable,
  callWaiter,
  // updateWaiterTable,
  getTables
}

