import React, { Component, Fragment } from 'react';
import OrderItem from './OrderItem';
import PayItem from './PayItem';
//import OrderPayed from './OrderIPayed';
import TotalCount from './TotalCount';
import OrderButtons from './OrderButtons';
import TableService from "../../services/TableService";
import Slidemenu from '../Slidemenu/Slidemenu'

class ContentOrder extends Component {
  state = {
    order : {
      open : false
    },
    table: null,
    editing: false,
  }

  payCardVisibility = () => {
      this.setState({
        order : {
          open: this.state.order.open ? false : true}
      })
  }


  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table }, () => console.log(this.state))
  )};

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
  }

  onClickEdit = () => {
    this.setState({
      editing :  this.state.editing ? false : true
    }, () => console.log(this.state.editing))
  }

  render() {
    return (
      <div>
        <div className='pt-4'>
          <div className='button-close-div mb-4'>
            <h5 className='pedido-title'>Tu pedido</h5>
            <span onClick={this.props.visibilityMenu} className="material-icons white close-menu-content">clear</span>
          </div>
          <div className='over-flow-order'>
            <OrderItem {...this.state.table} editing={this.state.editing}></OrderItem>
          </div>
            <TotalCount {...this.state.table}></TotalCount>
          <div >
            <OrderButtons onClickEdit={this.onClickEdit}  visibilityMenuCard={this.payCardVisibility} editing={this.state.editing}></OrderButtons>
          </div>
          {/* <div>
            <OrderPayed></OrderPayed>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ContentOrder;