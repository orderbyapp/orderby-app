import React, { Component, Fragment } from 'react';
import './MenuTop.css'
import Slidemenu from '../Slidemenu/Slidemenu'
import OrderLunch from '../OrderLunch/OrderLunch'
import ContentOrder from '../OrderLunch/ContentOrder';

class MenuTop extends Component {
  state = {
    order : {
      open : false
    },
    color: 'transparent',
    position:  window.scrollY
  }

  orderVisibility = () => {
    this.setState({
      order : {
        ...this.order,
        open: this.state.order.open ? false : true}
    })
  }

  componentDidMount = () => {
    window.addEventListener('scroll', function(e) {
      let positionScroll = window.scrollY;
      this.setState({
        position: positionScroll
      }, () => {
        if(this.state.position >= 50){
          this.setState({
            color: 'pink-nav'
          })
        } else {
          this.setState({
            color: 'transparent'
          })
        }
      })
    }.bind(this));

  
  }

  render() {
    return (
      <div>  
      <div className={`container-menu ${this.state.color}  margin-top-16`}>
        <div className='container padding-menu-nav'>
          <nav className='top-menu'>
            <span className="material-icons white">arrow_back</span>
           <div className='flex-and-align'> <span className="step-bg">2</span> <span className="material-icons white"><a onClick={this.orderVisibility}>shopping_cart</a></span></div>
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