import http from './base-http-service';

export const getRestaurants = () => http.get(`/restaurants`).then( response => response.data)
export const createRestaurants = () => http.post(`/restaurants`).then( response => response.data)
export const getRestaurantById = (id) => http.get(`/restaurants/${id}`).then(response => response.data) 
export const updateRestaurantById = (id) => http.put(`/restaurants/${id}`).then(response => response.data) 
export const deleteRestaurantById = (id) => http.post(`/restaurants/${id}`).then(response => response.data) 
