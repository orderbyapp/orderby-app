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
    if(token){
      let response = await fetch(`http://localhost:3001/orders/${this.props.table.orderId}/charge`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
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
  }

  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table}))
    };

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
  }


  render() {

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