import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '../Utilities/Button';
import {Redirect} from 'react-router-dom'
import TableService from "../../services/TableService";
import PaymentService from "../../services/PaymentService";

class CheckoutForm extends Component {
  state = {
    completedPay : false
  }

  submit = (ev) => {
    const { table } = this.state
    ev.preventDefault();
    if (this.props.stripe) {
        this.props.stripe.createToken()
        .then(({token}) => {
          if(token){
            const data = {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                token: token.id
              })
            }
            PaymentService.paymentOrder(table.orderId, data)
            const cleanTable = {
              ...this.state.table,
              orders : [],
              orderId : '',
              payStatus : 'payed'
            }
            TableService.cleanTable(cleanTable)
            
            this.setState({
              completedPay : true
            })
          }
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
    <Redirect to={{
      pathname: '/thankyou',
      state: {
        table: this.state.table
      } }}/>
    );
  }
}

export default injectStripe(CheckoutForm);