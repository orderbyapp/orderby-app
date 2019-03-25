import React, { Component,Fragment } from 'react';
import './App.css';
import FoodTypeCard from './components/OrderBoard/FoodTypeCard';
import OrderBoard from './components/OrderBoard/Board';
// import Intro from './components/Intro/Intro'
import Loader from './components/Loader/Loader'
import Button from './components/Utilities/Button'
import Board from './components/Board/Board'
import Slidemenu from './components/Slidemenu/Slidemenu' 
import OrderLunch from './components/OrderLunch/OrderLunch';



class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <Intro></Intro> */}
        {/* <Loader></Loader> */}
        {/* <Button color='btn btn-order-by' width='w-100' border='border-pink' text='Ver carta'></Button> */}
         {/* <Board></Board>  */}
         <OrderBoard></OrderBoard>
      </div>
    );
  }
}

export default App;
