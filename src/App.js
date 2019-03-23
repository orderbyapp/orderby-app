import React, { Component } from 'react';
import './App.css';
// import Intro from './components/Intro/Intro'
// import Loader from './components/Loader/Loader'
// import Button from './components/Utilities/Button'
import Board from './components/Board/Board'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Intro></Intro> */}
          {/* <Loader></Loader> */}
          {/* <Button color='btn btn-order-by' width='w-100' border='border-pink' text='Ver carta'></Button> */}
          <Board></Board>
 
      </div>
    );
  }
}

export default App;
