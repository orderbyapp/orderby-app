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
          <span>Valoración - <strong className='purple'>TOP SEMANAL</strong></span>
        </div>
        <div>
        <small className='purple'>Nº</small>
        </div>
        

        </div>

        <hr></hr>

       <div className='column'>
        <div className='user-rating pt-3'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://res.cloudinary.com/dc94hgijj/image/upload/v1555053084/order-by/1555053083808-guy_rothblum_square.jpg.jpg'} />
            <div className='waiters-data'>
              <h6 className='p-0 m-0'>Luis - Camarero</h6>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
               
              </div>
            </div>   
          </div>
          <div>
            <small className='purple'>55</small>
          </div>
        </div>

        <div className='user-rating pt-3'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://www.zwettlers.com/typo3temp/pics/Mitzi_01_63cefd5127.jpg'} />
            <div className='waiters-data'>
              <h6 className='p-0 m-0'>María - Camarera</h6>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
               
              </div>
            </div>   
          </div>
          <div>
            <small className='purple'>85</small>
          </div>
        </div>

        <div className='user-rating pt-3'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://res.cloudinary.com/dc94hgijj/image/upload/v1553732498/order-by/1553732497061-waiter.jpg.jpg'} />
            <div className='waiters-data'>
              <h6 className='p-0 m-0'>Paco - Camarero</h6>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                
               
              </div>
            </div>   
          </div>
          <div>
            <small className='purple'>69</small>
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