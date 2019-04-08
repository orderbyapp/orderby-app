import axios from 'axios'

const API_URL = 'https://orderby.herokuapp.com/'

const http = axios.create ({
  baseURL : API_URL,
  withCredentials: true
})

export const getRestaurants = () => http.get(`/restaurants`).then( response => response.data)
export const createRestaurants = () => http.post(`/restaurants`).then( response => response.data)
export const getRestaurantById = (id) => http.get(`/restaurants/${id}`).then(response => response.data) 
export const updateRestaurantById = (id) => http.put(`/restaurants/${id}`).then(response => response.data) 
export const deleteRestaurantById = (id) => http.post(`/restaurants/${id}`).then(response => response.data) 
