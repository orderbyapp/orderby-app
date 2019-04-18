import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/src/collapse'
import 'jquery'
import 'font-awesome/css/font-awesome.min.css'
import 'material-icons/iconfont/material-icons.css'
import { HashRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.min.css' 
import { TableStore } from './contexts/TableStore'
import { AuthStore } from './contexts/AuthStore'
import { PUBLIC_URL } from './constants'

ReactDOM.render(
  <HashRouter basename={PUBLIC_URL} >
    <TableStore>
        <AuthStore>
          <App />
        </AuthStore>
    </TableStore>
  </HashRouter>
, document.getElementById('root'));
serviceWorker.register();

