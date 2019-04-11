import http from './base-http-service';
import { BehaviorSubject } from 'rxjs';

const CURRENT_REST_KEY = 'current-restaurant';

let restaurant = JSON.parse(localStorage.getItem(CURRENT_REST_KEY) || '{}')
const restaurant$ = new BehaviorSubject(restaurant);

export const getRestaurantById = (id) => http.get(`/restaurants/${id}`)
  .then(response => {
    restaurant = response.data;
    localStorage.setItem(CURRENT_REST_KEY, JSON.stringify(restaurant));
    restaurant$.next(restaurant);
    return restaurant;
  });

  
export const updateRestaurant = (newRestaurant) => {
  localStorage.setItem(CURRENT_REST_KEY, JSON.stringify(newRestaurant));
  restaurant$.next(newRestaurant);
}
export const getTableByIdRest = (id) => http.get(`/tables/${id}`)
  .then(response => {
    restaurant = response.data;
    localStorage.setItem(CURRENT_REST_KEY, JSON.stringify(restaurant));
    restaurant$.next(restaurant);
    return restaurant;
  });

export const updateWaiterTableRest = (id, newTable) => http.put(`/tables/${id}`, newTable)
  .then(response => {
    restaurant = response.data;
    localStorage.setItem(CURRENT_REST_KEY, JSON.stringify(restaurant));
    restaurant$.next(restaurant);
    return restaurant;
  });

export const updateOrderRest = (id, order) => http.put(`/orders/${id}`, order)
  .then(response => response )
  
export const onRestaurantChange = () => restaurant$.asObservable();

export default {
  onRestaurantChange,
  getRestaurantById,
  updateRestaurant,
  getTableByIdRest, 
  updateWaiterTableRest, 
  updateOrderRest
}