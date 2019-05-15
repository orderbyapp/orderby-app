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

  animateStar = () => {
    setInterval(function(){ 
      if ($('a.star').hasClass('starred')) {
        $('a.star').removeClass('starred');
        $('a.star').addClass('unstarred');
      } else {
        $('a.star').addClass('starred');
      }
     }, 2000);
      
  }

renderUse = () => {
    var useTag = ' <use xlink:href="#hipchat_star" class="star-icon"></use>';
    return <svg className='star-icon' dangerouslySetInnerHTML={{__html: useTag }} />;
}


  render() {
    return (
      <div function={this.animateStar()}>
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
                <h4 className='mt-4 white text-center'>¡Oído cocina!</h4>
                <h5 className=' white enjoyed'><br></br> 
                Tu opinión es muy importante para nosotros, por favor valora el servicio recibido</h5>
              <div className='w-100 text-center mt-4'>
              <button onClick={this.showMessage} className='scale-in-center btn-pink-circle'>
                <svg style={{ height: 0,display: 'none'}}  >
                  <symbol id="hipchat_star" preserveAspectRatio="xMidYMid" width="29" height="28" viewBox="0 0 29 28">
                    <path d="M28.842,11.728 L22.247,17.406 C22.023,17.599 21.924,17.901 21.990,18.189 L23.888,26.467 C24.085,27.328 23.148,28.002 22.392,27.544 L14.947,23.029 C14.692,22.875 14.371,22.875 14.116,23.029 L6.670,27.544 C6.286,27.777 5.856,27.715 5.551,27.488 C5.221,27.275 5.011,26.881 5.114,26.430 L7.012,18.152 C7.078,17.863 6.979,17.562 6.755,17.369 L0.160,11.690 C-0.497,11.125 -0.171,10.051 0.689,9.943 L9.490,8.842 C9.766,8.808 10.005,8.632 10.120,8.379 L13.559,0.781 C13.830,0.182 14.542,0.049 15.022,0.368 C15.197,0.466 15.349,0.610 15.444,0.819 L18.883,8.416 C18.936,8.535 19.022,8.632 19.121,8.711 C19.221,8.775 19.331,8.827 19.452,8.842 L28.252,9.943 C28.385,9.959 28.499,10.005 28.605,10.062 C29.238,10.345 29.418,11.232 28.842,11.728 Z"
                    class="base" />
                    <path d="M18.757,10.753 L24.874,11.516 C25.217,11.559 25.348,11.987 25.087,12.214 L20.508,16.185 C19.903,16.705 19.684,17.350 19.852,18.120 L21.138,23.655 C21.218,24.000 20.842,24.271 20.539,24.087 L15.503,21.023 C15.190,20.836 14.846,20.742 14.471,20.742 C14.095,20.742 13.752,20.836 13.439,21.023 L8.403,24.087 C8.100,24.271 7.724,24.000 7.804,23.655 L9.091,18.120 C9.257,17.350 9.038,16.705 8.434,16.185 L3.855,12.214 C3.594,11.987 3.725,11.559 4.068,11.516 L10.186,10.753 C10.915,10.670 11.436,10.285 11.749,9.598 L14.106,4.408 C14.248,4.095 14.694,4.095 14.836,4.408 L17.193,9.598 C17.505,10.285 18.026,10.670 18.757,10.753 L18.757,10.753 Z"
                    class="mask" fill="currentColor" />
                  </symbol>
                </svg>
                <div class="container" >
                  <a  class="star">
                    <div class="star-outer">
                    
                      {this.renderUse()} 
                    
                    </div>
                  </a>
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