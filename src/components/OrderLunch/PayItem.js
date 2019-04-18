import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckOutForm'
import './PayItem.css'

class PayItem extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_zcTEmEh9DNzx17DvNLibaUVS">
      <div className="card-pay">
        <h6>Order by</h6>
        <Elements>
          <CheckoutForm {...this.props} />
        </Elements>
      </div>
    </StripeProvider>
    );
  }
}

export default PayItem;