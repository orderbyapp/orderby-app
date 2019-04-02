import React, { Component } from 'react';

class TotalCount extends Component {
  totalCount = () => {
    const props = this.props; 
    const total = props.orders && props.orders.map(product => product.quantity * product.price).reduce((a, b) =>  a  + b)
    return total
  }

  totalIva = () => {
    const total = this.totalCount()
    const iva = total * 21 / 100
    return iva.toFixed(2)
  }

 
  totalOrder = () => {
    const order = Number(this.totalCount());
    const iva = Number(this.totalIva())

    return (order - iva);
  }

  render() {
    return (
      <div className='mt-3'>
        <div className=''>
        <div className='flex-between'>
          <h5 className='white subtotal'>Subtotal</h5>
          <h5 className='white subtotal-price'>{this.totalOrder()}<span>€</span></h5>
        </div>
        <div className='flex-between'>
          <h5 className='white subtotal'>IVA</h5>
          <h5 className='white subtotal'>{this.totalIva()}<span>€</span></h5>
        </div>
        <div className='flex-between mt-3'>
          <h5 className='white total'>Total</h5>
          <h5 className='white total'>{this.totalCount()}<span>€</span></h5>
        </div>
        </div>
      </div>
    );
  }
}

export default TotalCount;