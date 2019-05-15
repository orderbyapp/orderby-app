import React, { Component } from 'react'
import GoodBye from '../../sources/mano.svg'
import { withRouter } from 'react-router-dom'
import './Thankyou.css'
import WaiterRate from '../WaiterInfo/WaiterRate';
import '../MenuSide/ActionButton.css'
import Plus from '../../sources/vectorpaint.svg'

class Thankyou extends Component {

  state = {
    table : {},
    callActive : false,
  }

 goHome = () =>{
    this.props.history.push('/board') 
  }
  showMessage = () => {
    this.setState({
      callActive: this.state.callActive ? false : true
    })
  }

  render() {
    return (
      <div>
        {this.state.callActive && <WaiterRate blur={this.state.callActive} {...this.state.waiter} />}
          <div className=''>
            <div className='d-flex  absolute-payment-arrow container mt-4'>
              <span className="material-icons white" onClick={this.goHome} >arrow_back</span>
              <h5 className='white'>Pago vía app</h5>
              <span className="material-icons dark-blue" >arrow_back</span>
            </div>
            <div className='bg-payment-thanks'>
              <div className='container payment-item'>
              <div className='w-100 text-center'>
              <img className='paymobile-image mb-3 mt-3 wobble-hor-bottom ' src={GoodBye} alt='image1'/>
              </div>
                <h5 className='mt-4 white text-center'>¡Oído cocina!</h5>
                <h5 className=' white enjoyed'>El pago se ha realizado correctamente</h5>
                <h5 className=' white enjoyed'>Por favor, valora la atención recibida por nuestro personal pulsando en la estrella</h5>
              </div>
            </div>
          </div> 
          <div className='container-button-more'>
        <button className="pure-material-button-contained" onClick={this.showMessage}><img className='more-icon-actionbutton' alt='more' src={Plus}/></button>
      </div>
      </div>
    );
  }
}

export default withRouter(Thankyou);