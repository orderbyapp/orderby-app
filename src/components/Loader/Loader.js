import React, { Component } from 'react';
import SphereSpinner from '@bit/dmitrymorozoff.react-spinners-kit.sphere';
import './Loader.css'
import text from '../../sources/logo.svg'

// const COLORS = ['#c4d601','#9a91fd','#ff7725','white']

class Loader extends Component {

  state = {
    color: 'white'
  }
  
// changeColor = () => {
//     let ColorValue
//     let index = Math.round(Math.random() * 3);
//     if(index === 1) ColorValue = "red";
//     if(index === 2) ColorValue = "lime";
//     if(index === 3) ColorValue = "yellow";
//     return ColorValue
// }

// componentDidMount() {
//   this.interval = setInterval(() => this.setState({ color: COLORS[Math.round(Math.random() * 3)] }), 2500);
// }

// componentWillUnmount() {
//   clearInterval(this.interval);
// }

  render() {
    console.log(this.state.color)
    return (
      <div>
        <div className="intro-bg center-flex">
          <SphereSpinner color={this.state.color} size={'100'}></SphereSpinner>
          <img alt='text-intro' src={text} class="text-intro-loading"/>
        </div>
      </div>
    );
  }
}

export default Loader;