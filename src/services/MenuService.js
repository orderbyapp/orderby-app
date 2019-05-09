import http from './base-http-service';

export const getMenu = () => http.get('/menus').then(response => response.data) 

export const newMenu = (menus) => {
  const data =  new FormData();
  Object.keys(menus).forEach(key => data.append(key, menus[key]))
  return http.post('/menus', data).then(response => response.data) 
}

export const deleteMenu = (id) => http.delete(`/menus/${id}`)

export const deleteProduct = (id) => http.delete(`/product/${id}`).then(response => response)

export const newProduct = (product) => {
  const data =  new FormData();
  Object.keys(product).forEach(key => data.append(key, product[key]))
  return http.post('/product', data).then(response => response.data) 
}

export default {
  newMenu,
  deleteMenu,
  deleteProduct,
  newProduct,
  getMenu
}

