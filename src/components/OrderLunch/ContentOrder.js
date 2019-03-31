import React, { Component } from 'react';
import OrderItem from './OrderItem';
import OrderPayed from './OrderIPayed';
import TotalCount from './TotalCount';
import OrderButtons from './OrderButtons';
import TableService from "../../services/TableService";

class ContentOrder extends Component {
  state = {
    table: null
  }

  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table })
  )};

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
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
            <OrderItem {...this.state.table}></OrderItem>
          </div>
            <TotalCount {...this.state.table}></TotalCount>
          <div >
            <OrderButtons></OrderButtons>
          </div>
          {/* <div>
            <OrderPayed></OrderPayed>
          </div> */}
        </div>
        <div>
          
        </div>
        
      </div>
    );
  }
}

export default ContentOrder;