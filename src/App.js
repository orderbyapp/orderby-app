import React, {Component} from 'react';
import './App.css';
import OrderBoard from './components/OrderBoard/Board';
import Intro from './components/Intro/Intro'
import Board from './components/Board/Board'
import Login from './components/Auth/Login'
import ListProducts from './components/ListProducts/ListProducts';
import {Switch, Route, Redirect} from 'react-router-dom'
import Welcome from './components/OnBoard/Welcome'
import Instructions from './components/OnBoard/InstructionsQr'
import Toast from './components/Toasts/Toast';
import Payment from './components/Payment/Payment';
import Thankyou from './components/Payment/Thankyou'
import TableRoute from './guards/TableRoute'
import ThanksRoute from './guards/ThanksRoute'
//import PrivateRoute from './guards/PrivateRoute'
import { spring, AnimatedRoute,AnimatedSwitch } from 'react-router-transition';
import WaiterBoard from './components/Waiter/WaiterBoard';
import TableDetail from './components/Waiter/TableDetail';
import WaiterIntro from './components/Waiter/IntroWaiter';


function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }
  
  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 180,
      damping: 22,
    });
  }
  
  // child matches will...
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 0.5,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.5),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };
  

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
                    <Route exact path="/waiter" component={WaiterBoard}/>
                    {/* <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="route-wrapper"> */}
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper">
                        <Route exact path="/waiterIntro" component={WaiterIntro}/>
                        <Route exact path='/waiter/:id' component={TableDetail}/>
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
