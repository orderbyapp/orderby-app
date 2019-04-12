import React, { Component } from 'react';
import imageWaiter from '../../sources/callWaiter.png'
import './WaiterCall.css'

class WaiterCall extends Component {

  state = {
    imageUrl : imageWaiter,
    classCallAnimated : 'slide-in-blurred-top'
  }


  closeCard = () => {
    this.setState({
      classCallAnimated : 'slide-out-blurred-top' 
    })
  }
   
  render() { 
    return (
      <div>
          <div className={`container fixed mt-3 animated-waiterCall  ${this.state.classCallAnimated}`}>
            <i className={`fa fa-times dark-grey absolute right-cross + ${this.props.blur && 'waiter-blurCall'}`} onClick={this.closeCard}></i>
            <div className={`card-waiterCall ${this.props.blur && 'waiter-blurCall'}`}> 
              <div className='image-waiterCall' style={{backgroundImage: `url(${this.state.imageUrl})`}} ></div>
              <h6 className="color-black">Hemos avisado a tu camarero.<br/>¡Llega en un instante!</h6>
            </div>
          </div>
      </div>
    );
  }
}

export default WaiterCall
