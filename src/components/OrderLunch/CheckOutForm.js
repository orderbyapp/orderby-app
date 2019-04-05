import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '../Utilities/Button';
import {Redirect} from 'react-router-dom'
import TableService from "../../services/TableService";


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  state = {
    completedPay : false,
  }


  async submit(ev) {
    ev.preventDefault();
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch(`http://localhost:3001/orders/${this.props.table.orderId}/charge`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // name: this.state.name,
        // email: this.state.email,
        // description: this.state.productData.description,
        // amount: this.state.productData.price,
        token: token.id
      })
    });
    
  
    if (response.ok) 
    console.log('compra ok')
    const cleanTable = {
      ...this.state.table,
      orders : [],
      orderId : ''
    }

    TableService.cleanTable(cleanTable)
    
    this.setState({
      completedPay : true
    })
  }

  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table}))
    };

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
  }


  render() {

   
    //   return (<form onSubmit={this.onSubmit} >
    //     <span>{ this.state.paymentError }</span><br />
    //     <input type='text' data-stripe='number' placeholder='credit card number' /><br />
    //     <input type='text' data-stripe='exp-month' placeholder='expiration month' /><br />
    //     <input type='text' data-stripe='exp-year' placeholder='expiration year' /><br />
    //     <input type='text' data-stripe='cvc' placeholder='cvc' /><br />
    //     <input disabled={this.state.submitDisabled} type='submit' value='Purchase' />
    //   </form>);
    // }

    if(!this.state.completedPay){
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
    return (
    <Redirect to='/thankyou'></Redirect>
    );
  }
}

export default injectStripe(CheckoutForm);