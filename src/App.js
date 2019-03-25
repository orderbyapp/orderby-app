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
  state = {
    order : {
      open : false
    }
  }

  orderVisibility = () => {
    this.setState({
      order : {
        ...this.order,
        open: this.state.order.open ? false : true}
    }, () => console.log(this.state.order.open))
  }

  render() {
    return (
      <div className="App">
        {/* <Slidemenu open={this.state.order.open} >
          <Fragment>
            <OrderLunch>
            {this.state.order.open && 
              <button onClick={this.orderVisibility}>
                <i class="fa fa-chevron-up"></i>
              </button> 
              }
              
            </OrderLunch>
           
          </Fragment>
        </Slidemenu>
        <button onClick={this.orderVisibility}>
                <i class="fa fa-chevron-down"></i>
              </button>  */}
        {/* <Intro></Intro> */}
        <Loader></Loader>
        {/* <Button color='btn btn-order-by' width='w-100' border='border-pink' text='Ver carta'></Button> */}
         {/* <Board></Board>  */}
         {/* <OrderBoard></OrderBoard> */}
      </div>
    );
  }
}

export default App;
