import React, { Component } from 'react';
import imageWaiter from '../../sources/waiter.jpg'
import './Waiter.css'

class Waiter extends Component {

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
              <div className='image-waiter' style={{backgroundImage: `url(https://res.cloudinary.com/dc94hgijj/image/upload/v1555053084/order-by/1555053083808-guy_rothblum_square.jpg.jpg)`}} ></div>
              <h6 className="color-white">Serás antendido por: {this.props.firstName}</h6>
            </div>
          </div>
      </div>
    );
  }
}

export default Waiter
