import React, { Component,Fragment } from 'react';
import './App.css';
import OrderBoard from './components/OrderBoard/Board';
import Intro from './components/Intro/Intro'
import Loader from './components/Loader/Loader'
import Board from './components/Board/Board'
import ListProducts from './components/ListProducts/ListProducts';
import { Switch, Route, Redirect} from 'react-router-dom'
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
                <Route exact path='/loading' component={Loader}></Route>
                <Route exact path='/board' component={Board}></Route>
                <Route exact path='/orderboard' component={OrderBoard}></Route>
                <Route exact path='/menulist' component={ListProducts}></Route>
                <Redirect to='/' />
              {/* </AnimatedSwitch> */}
            </Switch>
        {/* <Intro></Intro> */}
        {/* <Loader></Loader> */}
        {/* <Button color='btn btn-order-by' width='w-100' border='border-pink' text='Ver carta'></Button> */}
        {/* <Board></Board>  */}
        {/* <OrderBoard></OrderBoard> */}
        {/* <ListProducts></ListProducts> */}
      </div>
    );
  }
}

export default App;
