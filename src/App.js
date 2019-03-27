import React, { Component } from 'react';
import './App.css';
import OrderBoard from './components/OrderBoard/Board';
import Intro from './components/Intro/Intro'
import Loader from './components/Loader/Loader'
import Board from './components/Board/Board'
import ListProducts from './components/ListProducts/ListProducts';
import { Switch, Route, Redirect} from 'react-router-dom'
import Welcome from './components/OnBoard/Welcome'
// import { AnimatedSwitch } from 'react-router-transition';

class App extends Component {

  render() {
    return (
      <div className="App">
         <Switch>
            {/* <AnimatedSwitch
              atEnter={{ opacity: 1 }}
              atLeave={{ opacity: 0.5 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"> */}
                <Route exact path='/' component={Intro}></Route>
                <Route exact path='/table/:id' component={Welcome}></Route>
                <Route exact path='/loading' component={Loader}></Route>
                <Route exact path='/board' component={Board}></Route>
                <Route exact path='/orderboard' component={OrderBoard}></Route>
                <Route exact path='/menulist' component={ListProducts}></Route>
                <Redirect to='/' />
              {/* </AnimatedSwitch> */}
            </Switch>
      </div>
    );
  }
}

export default App;
