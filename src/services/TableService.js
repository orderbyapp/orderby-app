
import http from './base-http-service';
import { BehaviorSubject } from 'rxjs';

const CURRENT_TABLE_KEY = 'current-table';

let table = JSON.parse(localStorage.getItem(CURRENT_TABLE_KEY) || '{}')
const table$ = new BehaviorSubject(table);

export const getTableById = (id) => http.get(`/tables/${id}`)
  .then(response => {
    table = response.data;
    localStorage.setItem(CURRENT_TABLE_KEY, JSON.stringify(table));
    return table;
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
