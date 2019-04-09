import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'material-icons/iconfont/material-icons.css'
//import { initializeFirebase, askForPermissioToReceiveNotifications } from './push-notification';
import { BrowserRouter, HashRouter} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css' 
import { TableStore } from './contexts/TableStore';
import { AuthStore } from './contexts/AuthStore';



ReactDOM.render(
  <HashRouter basename='/orderby-app'>
    <TableStore>
        {/* <AuthStore> */}
          <App />
        {/* </AuthStore> */}
    </TableStore>
  </HashRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
// initializeFirebase();
// askForPermissioToReceiveNotifications();
