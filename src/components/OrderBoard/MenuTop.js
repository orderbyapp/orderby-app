import React, { Component, Fragment } from 'react';
import './MenuTop.css'
import Slidemenu from '../Slidemenu/Slidemenu'
import OrderLunch from '../OrderLunch/OrderLunch'
import ContentOrder from '../OrderLunch/ContentOrder';

class MenuTop extends Component {
  state = {
    order : {
      open : false
    }
  }

  orderVisibility = () => {
    this.setState({
      order : {
        ...this.order,
        open: this.state.order.open ? false : true}
    }, () => console.log(this.state.order.open))
  }

  render() {
    return (
      <div>  
      <div className='container-menu margin-top-16'>
        <div className='container padding-menu-nav'>
          <nav className='top-menu'>
            <span className="material-icons white">arrow_back</span>
            <span className="material-icons white"><a onClick={this.orderVisibility}>restaurant_menu</a></span>
          </nav>
        </div>
      </div>
       <Slidemenu open={this.state.order.open} >
          <Fragment>
            <OrderLunch>
            {this.state.order.open && 
             <ContentOrder visibilityMenu={this.orderVisibility}></ContentOrder>
              }
            </OrderLunch>
          </Fragment>
        </Slidemenu>
      </div>
    );
  }
}

export default MenuTop;