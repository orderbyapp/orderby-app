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
          <span>Captación de Valoracion</span> - <small>(Semanal)</small>
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
          <small className='purple'>
           <i class="fa fa-star calendar-chart"></i> 
           <i class="fa fa-star calendar-chart"></i>
           <i class="fa fa-star calendar-chart"></i>

           </small>
           <i class="far fa-smile green"></i>
          </div>
        </div>
        

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Martes</h6>
            </div>   
          </div>
          <div>
          <small className='purple'>
           <i class="fa fa-star calendar-chart"></i> 
           <i class="fa fa-star calendar-chart"></i>
           <i class="fa fa-star calendar-chart"></i>

           </small>
           <i class="far fa-smile green"></i>          </div>
        </div>

        <div className='user-rating pt-1'>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Miércoles</h6>
            </div>   
          </div>
          <div>
          <small className='purple'>
           <i class="fa fa-star calendar-chart"></i> 
           <i class="fa fa-star calendar-chart"></i>
           </small>
           <i class="far fa-meh orange"></i>          </div>
        </div>
        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Jueves</h6>
            </div>   
          </div>
          <div>
          <small className='purple'>
           <i class="fa fa-star calendar-chart"></i> 
           <i class="fa fa-star calendar-chart"></i>
           </small>
           <i class="far fa-meh orange"></i>           </div>
        </div>

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Viernes</h6>
            </div>   
          </div>
          <div>
          <small className='purple'>
           <i class="fa fa-star calendar-chart"></i> 
           </small>
           <i class="far fa-frown text-danger"></i>           </div>
        </div>

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Sábado</h6>
            </div>   
          </div>
          <div>
          <small className='purple'>
           <i class="fa fa-star calendar-chart"></i> 
           <i class="fa fa-star calendar-chart"></i>
           <i class="fa fa-star calendar-chart"></i>

           </small>
           <i class="far fa-smile green"></i>
          </div>
        </div>

        <div className='user-rating pt-1 '>
          <div className='user-rating-info'>
            <div className='waiters-data'>
              <h6 className='p-0 m-0 font-weight-light'>Féstivo*</h6>
            </div>   
          </div>
          <div>
          <small className='purple'>
           <i class="fa fa-star calendar-chart"></i> 
           <i class="fa fa-star calendar-chart"></i>
           <i class="fa fa-star calendar-chart"></i>

           </small>
           <i class="far fa-smile green"></i>          </div>
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