import React, { Component } from 'react';
import imageWaiter from '../../sources/callWaiter.png'
import './WaiterCall.css'

class WaiterCall extends Component {

  state = {
    imageUrl : imageWaiter,
    classAnimated : 'slide-in-blurred-top'
  }


  closeCard = () => {
    this.setState({
      classAnimated : 'slide-out-blurred-top' 
    })
    this.props.waiterVisibility()
  }
   
  render() { 
    return (
      <div>
          <div className={`container fixed mt-3 animated-waiter  ${this.state.classAnimated}`}>
            <i className={`fa fa-times white absolute right-cross + ${this.props.blur && 'waiter-blur'}`} onClick={this.closeCard}></i>
            <div className={`card-waiter ${this.props.blur && 'waiter-blur'}`}> 
              <div className='image-waiter' style={{backgroundImage: `url(${this.state.imageUrl})`}} ></div>
              <h6 className="color-black">Hemos avisado a tu camarero, ¡Llega en un instante!</h6>
            </div>
          </div>
      </div>
    );
  }
}

export default WaiterCall
