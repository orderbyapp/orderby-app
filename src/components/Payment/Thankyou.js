import React, { Component } from 'react'
import GoodBye from '../../sources/chef.svg'
import { withRouter } from 'react-router-dom'
import './Thankyou.css'
import WaiterRate from '../WaiterInfo/WaiterRate';
import '../MenuSide/ActionButton.css'
import Plus from '../../sources/vectorpaint.svg'
import './Star.css'

import $ from 'jquery'
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



renderUse = () => {
    var useTag = ' <use xlink:href="#hipchat_star" class="star-icon"></use>';
    return <svg className='star-icon' dangerouslySetInnerHTML={{__html: useTag }} />;
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
                <h3 className='mt-4 white text-center'>¡Oído cocina!</h3>
                <h5 className=' white enjoyed'><br></br> 
                      ¡Pago realizado correctamente!</h5>
                <h5 className=' white enjoyed scale-in-center'><br></br> 
                Tu opinión es muy importante para nosotros, por favor valora el servicio recibido pulsando en la estrella</h5>
              <div className='w-100 text-center mt-4 auto-adjust-button'>
              <button onClick={this.showMessage} className='scale-in-center btn-pink-circle'>
                
                <div class="container auto-adjust-button" >
                  <div  class="star auto-adjust-button">
                    <div class="star-outer auto-adjust-button">
                    
                      <i className='heartbeat fa fa-star white star-to-rate'></i>
                    
                    </div>
                  </div>
                </div>
                </button>
              </div>
     
               
                  
              </div>
            </div>
          </div> 
      </div>
    );
  }
}

export default withRouter(Thankyou);