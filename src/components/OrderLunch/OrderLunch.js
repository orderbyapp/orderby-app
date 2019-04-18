import React, { Component } from 'react'
import './OrderLunch.css'

class OrderLunch extends Component {
  render() {
    return (
      <div>
        <div className='menu-dropdown curved-in container'>
            {this.props.children}
        </div> 
      </div>
    );
  }
}

export default OrderLunch;