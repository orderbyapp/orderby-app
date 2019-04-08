import axios from 'axios';

const http = axios.create({
  baseURL: 'https://orderby.herokuapp.com/',
  withCredentials: true
});

export default http