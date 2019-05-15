import React, { Component } from 'react';
import './Ratingwaiters.css'
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
        boxShadow: '2px 2px 10px #00000021',
      }}>
      
        <div className='flex-top-charts'>
        <div>
           <i class="fa fa-users calendar-chart"></i>
          <span>Valoración empleados</span> - <small>(Global)</small>
        </div>
        <div>
        <small className='purple'>Nº</small>
        </div>
        

        </div>

        <hr></hr>

       <div className='column'>
        <div className='user-rating pt-3'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://via.placeholder.com/150'} />
            <div className='waiters-data'>
              <h6 className='p-0 m-0'>Victor - Camarero</h6>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
               
              </div>
            </div>   
          </div>
          <div>
            <small className='purple'>12</small>
          </div>
        </div>

        <div className='user-rating pt-3'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://via.placeholder.com/150'} />
            <div className='waiters-data'>
              <h6 className='p-0 m-0'>Victor - Camarero</h6>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
               
              </div>
            </div>   
          </div>
          <div>
            <small className='purple'>12</small>
          </div>
        </div>

        <div className='user-rating pt-3'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://via.placeholder.com/150'} />
            <div className='waiters-data'>
              <h6 className='p-0 m-0'>Victor - Camarero</h6>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                
               
              </div>
            </div>   
          </div>
          <div>
            <small className='purple'>12</small>
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