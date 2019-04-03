import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '../Utilities/Button';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch(`http://localhost:3001/orders/${this.props.table.orderId}/charge`, {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
    console.log(response)
  
    if (response.ok) console.log("Purchase Complete!")
  }

  render() {
    
    return (
      <div className="checkout">
        <p>Introduzca los datos de su tarjeta</p>
        <CardElement style={{
            base: {
                iconColor: '#FFFFFF',
                color: '#FFFFFF',
                lineHeight: '40px',
                fontWeight: 400,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '16px',

                '::placeholder': {
                    color: '#CFD7E0',
                }
            }
        }} />
        <Button color='btn btn-pink-color-white' text='Pagar' width='w-100' onClick={this.submit}/>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);