import React, { Component } from 'react';
import SphereSpinner from '@bit/dmitrymorozoff.react-spinners-kit.sphere';
import './Loader.css'
import text from '../../sources/logo.svg'

// const COLORS = ['#c4d601','#9a91fd','#ff7725','white']

class Loader extends Component {

  state = {
    color: 'white'
  }

  render() {
    console.log(this.state.color)
    return (
      <div>
        <div className="intro-bg center-flex">
          <SphereSpinner color={this.state.color} size={100}></SphereSpinner>
          <img alt='text-intro' src={text} className="text-intro-loading"/>
        </div>
      </div>
    );
  }
}

export default Loader;