
import http from './base-http-service';
import { BehaviorSubject } from 'rxjs';

const CURRENT_USER_KEY = 'current-user';

let user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || '{}')
const user$ = new BehaviorSubject(user);

const authenticate = (user) => http.post('waiters/authenticate', user)
  .then(response => {
    console.log("res ", response.data)
    user = response.data;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    user$.next(user);
    return user;
  });

const register = (user) => http.post('waiters/register', user)
  .then(response => response.data);

const logout = () => http.get('/logout')
  .then(response => {
    user = {};
    localStorage.removeItem(CURRENT_USER_KEY);
    return response.data
  });

const onUserChange = () => user$.asObservable();

export default {
  authenticate,
  register,
  logout,
  onUserChange
}
  

