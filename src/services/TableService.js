
import http from './base-http-service';
import { BehaviorSubject } from 'rxjs';

const CURRENT_TABLE_KEY = 'current-table';

let table = JSON.parse(localStorage.getItem(CURRENT_TABLE_KEY) || '{}')
const table$ = new BehaviorSubject(table);

export const getTableById = (id) => http.get(`/tables/${id}`)
  .then(response => {
    table = response.data;
    localStorage.setItem(CURRENT_TABLE_KEY, JSON.stringify(table));
    table$.next(table);
    return table;
  });
export const getMenuList = (name) => http.get(`/menulist/${name}`)
  .then(response => response )
  

export const updateTable = (newTable) => {
  localStorage.setItem(CURRENT_TABLE_KEY, JSON.stringify(newTable));
  table$.next(newTable);
}

// export const updateTable = (newItem) => {
//   let tableUpdate = {
//     ...table,
//     orders : [newItem]
//   }
//   localStorage.setItem(CURRENT_TABLE_KEY, JSON.stringify(tableUpdate));
//   table$.next(table);
//   return tableUpdate
// }



export const onTableChange = () => table$.asObservable();

export default {
  getTableById,
  getMenuList,

  onTableChange,
  updateTable
}

// export const getTable = () => http.get(`/tables`).then( response => response.data)
// export const createTable = () => http.post(`/tables`).then( response => response.data)
// export const getTableById = (id) => http.get(`/tables/${id}`).then(response => response.data) 
// export const updateTableById = (table) => http.put(`/tables/${table.id}`, table)
// export const deleteTableById = (table) => http.post(`/tables/${table.id}`, table)
