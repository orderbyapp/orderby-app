import React, { Component } from 'react';
import Button from '../Utilities/Button';

class OrderButtons extends Component {
  render() {
    return (
      <div className='absolute-buttons-order'>
        <Button color='btn btn-linear-white-bg-trans' text='Pedir la cuenta' width='w-100'></Button>
        <div className="strike mt-2">
            <span className='white'>o</span>
        </div>
        <Button color='btn btn-pink-color-white' text='Pagar por la app' width='w-100'></Button>
      </div>
    );
  }
}

export default OrderButtons;