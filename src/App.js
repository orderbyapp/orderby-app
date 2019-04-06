import React, {Component} from 'react';
import './App.css';
import OrderBoard from './components/OrderBoard/Board';
import Intro from './components/Intro/Intro'
import Loader from './components/Loader/Loader'
import Board from './components/Board/Board'
import Login from './components/Auth/Login'
import ListProducts from './components/ListProducts/ListProducts';
import {Switch, Route, Redirect} from 'react-router-dom'
import Welcome from './components/OnBoard/Welcome'
import Toast from './components/Toasts/Toast';
import Payment from './components/Payment/Payment';
import Thankyou from './components/Payment/Thankyou'
import TableRoute from './guards/TableRoute'
// import { Forbidden, NotFound } from './components/Errors/Error'; import
// PageShell from './components/PageShell/PageShell' import { AnimatedSwitch }
// from 'react-router-transition';
import WaiterBoard from './components/Waiter/WaiterBoard';
import TableDetail from './components/Waiter/TableDetail';

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

                    <Route exact path='/' component={Intro}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/waiter" component={WaiterBoard}/>
                    <TableRoute exact path='/payment' component={Payment}/>
                    <Route exact path='/table/:id' component={Welcome}/>
                    <Route exact path='/waiter/:id' component={TableDetail}/>
                    <Route exact path='/loading' component={Loader}/>
                    <TableRoute exact path='/board' component={Board}/>
                    <TableRoute exact path='/orderboard' component={OrderBoard}/>
                    <TableRoute exact path='/menulist/:name' component={ListProducts}/>
                    <TableRoute exact path='/toast' component={Toast}/> {/* esta ahi que hacerla private*/}
                    <TableRoute exact path='/thankyou' component={Thankyou}/> {/* <Route exact path="/forbidden" component={Forbidden}/>
                <Route exact path="/not-found" component={NotFound}/> */}
                    <Redirect to='/'/> {/* </AnimatedSwitch> */}
                </Switch>
            </div>
        );
    }
}

export default App;
