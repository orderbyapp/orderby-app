import React, { Component } from 'react';
import PayItem from '../OrderLunch/PayItem';
import PayMobile from '../../sources/payment-method (1).png'
import TableService from "../../services/TableService";
import './Payment.css'
import { withRouter } from "react-router-dom";


class Payment extends Component {

  state = {
    table : []
  }

  onClickBack = () =>{
    this.props.history.push('/board') 
  }

  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table, orders: table.orders})
      )};

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
  }
  render() {
    return (
      <div className=''>

        <div className='d-flex  absolute-payment-arrow container mt-4'>
          <span className="material-icons white" onClick={this.onClickBack} >arrow_back</span>
          <h5 className='white'>Pago vía app</h5>
          <span className="material-icons dark-blue" >arrow_back</span>
        </div>

        <div className='bg-payment'>
          <div className='container payment-item'>
            <img className='paymobile-image mb-3 mt-3' src={PayMobile}></img>
            <h6 className='mt-4 mb-4 white enjoyed'>¡Esperamos que hayas disfrutado!</h6>
            <PayItem {...this.state}></PayItem>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter( Payment );