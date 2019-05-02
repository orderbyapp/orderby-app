import React, {Component} from 'react'
import './App.css';
import OrderBoard from './components/OrderBoard/Board'
import Intro from './components/Intro/Intro'
import Board from './components/Board/Board'
import Login from './components/Auth/Login'
import ListProducts from './components/ListProducts/ListProducts'
import {Switch, Route, Redirect} from 'react-router-dom'
import Welcome from './components/OnBoard/Welcome'
import Instructions from './components/OnBoard/InstructionsQr'
import Toast from './components/Toasts/Toast'
import Payment from './components/Payment/Payment'
import Thankyou from './components/Payment/Thankyou'
import TableRoute from './guards/TableRoute'
import ThanksRoute from './guards/ThanksRoute'
import PrivateRoute from './guards/PrivateRoute'
import { AnimatedSwitch } from 'react-router-transition'
import WaiterBoard from './components/Waiter/WaiterBoard'
import TableDetail from './components/Waiter/TableDetail'
import WaiterIntro from './components/Waiter/IntroWaiter';
import ManagerIntro from './components/Managers/Intro'
import ManagerLogin from './components/Managers/Login'



class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={Intro}/>
                    <Route exact path='/table/:id' component={Welcome}/>
                    <Route exact path='/instructions' component={Instructions}/>
                    <TableRoute exact path='/payment' component={Payment}/>
                    <ThanksRoute exact path='/thankyou' component={Thankyou}/> 
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/managerintro" component={ManagerIntro}/>
                    <Route exact path="/managerlogin" component={ManagerLogin}/>
                    <PrivateRoute exact path="/waiter" component={WaiterBoard}/>
                    <PrivateRoute exact path='/waiter/:id' component={TableDetail}/>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper">
                        <Route exact path="/waiterIntro" component={WaiterIntro}/>
                        <TableRoute exact path='/board' component={Board}/>
                        <TableRoute exact path='/orderboard' component={OrderBoard}/>
                        <TableRoute exact path='/menulist/:name' component={ListProducts}/>
                        <TableRoute exact path='/toast' component={Toast}/> 
                    </AnimatedSwitch>
                    <Redirect to='/'/> 
                </Switch>
            </div>
        );
    }
}

export default App;
