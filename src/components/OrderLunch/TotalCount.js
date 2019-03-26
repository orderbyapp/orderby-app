import React, { Component } from 'react';

class TotalCount extends Component {
  render() {
    return (
      <div className='mt-3'>
        <div className=''>
        <div className='flex-between'>
          <h5 className='white subtotal'>Subtotal</h5>
          <h5 className='white subtotal-price'>16<span>€</span></h5>
        </div>
        <div className='flex-between'>
          <h5 className='white subtotal'>IVA</h5>
          <h5 className='white subtotal'>5<span>€</span></h5>
        </div>
        <div className='flex-between mt-3'>
          <h5 className='white total'>Total</h5>
          <h5 className='white total'>5<span>€</span></h5>
        </div>
        </div>
      </div>
    );
  }
}

export default TotalCount;