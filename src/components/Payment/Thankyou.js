import React, { Component } from 'react';
import GoodBye from '../../sources/mano.svg'
import { withRouter } from "react-router-dom";
import bgColors from '../../sources/fondo-pantalla-pago.svg'
import './Thankyou.css'

class Thankyou extends Component {

 goHome = () =>{
    this.props.history.push('/board') 
  }


  render() {
    return (
      <div>
          <div className=''>
            <div className='d-flex  absolute-payment-arrow container mt-4'>
              <span className="material-icons white" onClick={this.goHome} >arrow_back</span>
              <h5 className='white'>Pago vía app</h5>
              <span className="material-icons dark-blue" >arrow_back</span>
            </div>
            <div className='bg-payment-thanks' style={{backgroundImage : `url(${bgColors})`}}>
              <div className='container payment-item'>
              <div className='w-100 text-center'>
              <img className='paymobile-image mb-3 mt-3 wobble-hor-bottom ' src={GoodBye}></img>

              </div>
                <h5 className='mt-4 white '>¡Esperamos volver a verte pronto!</h5>
                <h5 className=' white enjoyed'>El pago se ha realizado correctamente</h5>
              </div>
            </div>
          </div> 
      </div>
    );
  }
}

export default withRouter(Thankyou);