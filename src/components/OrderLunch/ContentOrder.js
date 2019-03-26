import React, { Component } from 'react';
import OrderItem from './OrderItem';
import TotalCount from './TotalCount';
import OrderButtons from './OrderButtons';

class ContentOrder extends Component {
  render() {
    return (
      <div>
        <div className='pt-4'>
          <div className='button-close-div mb-4'>
          <h5 className='pedido-title'>Tu pedido</h5>
             <span onClick={this.props.visibilityMenu} className="material-icons white close-menu-content">clear</span>
          </div>
          <div className='over-flow-order'>
            <OrderItem></OrderItem>
            <OrderItem></OrderItem>
          </div>
          <TotalCount></TotalCount>
          <div >
            <OrderButtons></OrderButtons>
          </div>
        </div>
        <div>
          
        </div>
        
      </div>
    );
  }
}

export default ContentOrder;