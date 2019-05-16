import React, { Component } from 'react';
import './MetricsDashboard.css'

class Ratingwaiters extends Component {
  render() {
    return (
      <div>
        <div className="chart mb-4"     style={{
        width: "100%",
        padding: '25px',
        paddingTop: '20px',
        paddingBottom: '25px',
        background: 'white',
        borderRadius: '4px',
        
      }}>
      
        <div className='flex-top-charts'>
        <div>
           <i class="fas fa-info-circle purple pr-3"></i>
          <span>Compra según día</span> - <small>(Semana Actual)</small>
        </div>
        <div>
        <small className='purple'>Balance / Rsto</small>
        </div>
        

        </div>

        <hr></hr>

       <div className='column'>
        

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Lunes</h6>
            </div>   
          </div>
          <div>
          <small className='purple'>- 25% </small><i class="fas fa-arrow-down text-danger pl-2"></i>
          </div>
        </div>
        

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Martes</h6>
            </div>   
          </div>
          <div>
          <small className='purple'>+ 15% </small><i class="fas fa-arrow-up green pl-2"></i>
          </div>
        </div>

        <div className='user-rating pt-1'>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Miércoles</h6>
            </div>   
          </div>
          <div>
            <small className='purple'>+ 12%</small><i class="fas fa-arrow-up green pl-2"></i>
          </div>
        </div>
        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Jueves</h6>
            </div>   
          </div>
          <div>
            <small className='purple'>+ 32% </small><i class="fas fa-arrow-up green pl-2"></i>
          </div>
        </div>

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Viernes</h6>
            </div>   
          </div>
          <div>
            <small className='purple'>+ 15% </small><i class="fas fa-arrow-up green pl-2"></i>
          </div>
        </div>

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Sábado</h6>
            </div>   
          </div>
          <div>
            <small className='purple'>-2%</small><i class="fas fa-arrow-down text-danger pl-2"></i>
          </div>
        </div>

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Féstivo*</h6>
            </div>   
          </div>
          <div>
            <small className='purple'>+ 42%</small><i class="fas fa-arrow-up green pl-2"></i>
          </div>
        </div>


       </div>
      <div>

      </div>

  
      </div>
      </div>
    );
  }
}

export default Ratingwaiters;