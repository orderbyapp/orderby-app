import React, { Component } from 'react';
import './App.css';
import OrderBoard from './components/OrderBoard/Board';
import Intro from './components/Intro/Intro'
import Loader from './components/Loader/Loader'
import Board from './components/Board/Board'
import Login from './components/Auth/Login'
import ListProducts from './components/ListProducts/ListProducts';
import { Switch, Route, Redirect} from 'react-router-dom'
import Welcome from './components/OnBoard/Welcome'
import Toast from './components/Toasts/Toast';
import Payment from './components/Payment/Payment';
//import { Forbidden, NotFound } from './components/Errors/Error';

// import PageShell from './components/PageShell/PageShell'
// import { AnimatedSwitch } from 'react-router-transition';

class App extends Component {

  render() {
    return (
      <div className="App">
         <Switch>
            {/* <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"> */}
                <Route exact path='/' component={Intro}></Route>
                <Route exact path="/login" component={Login} />
                <Route exact path='/payment' component={Payment}></Route>
                <Route exact path='/table/:id' component={Welcome}></Route>
                <Route exact path='/loading' component={Loader}></Route>
                <Route exact path='/board' component={Board}></Route>
                <Route exact path='/orderboard' component={OrderBoard}></Route>
                <Route exact path='/menulist/:name' component={ListProducts}></Route>
                <Route exact path='/toast' component={Toast}></Route>
                {/* <Route exact path="/forbidden" component={Forbidden}/>
                <Route exact path="/not-found" component={NotFound}/> */}
                <Redirect to='/' />

              {/* </AnimatedSwitch> */}
            </Switch>
      </div>
    );
  }
}

export default App;
