import React, { Component } from 'react';
import Button from '../Utilities/Button';

class OrderButtons extends Component {
  render() {
    return (
      <div>
      <div className='mt-3  p-0'>
        <Button color='btn btn-linear-white-bg-trans' text='Pedir la cuenta' width='w-100'></Button>
        <Button color='btn btn-white-dark-color' text='Enviar a cocina' width='w-100'></Button>
        <div class="strike mt-2">
            <span className='white'>o</span>
        </div>
        <Button color='btn btn-pink-color-white' text='pedir la cuenta' width='w-100'></Button>
      </div>
      </div>
    );
  }
}

export default OrderButtons;