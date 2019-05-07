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
           <i class="fas fa-utensils calendar-chart"></i>
          <span>Más Pedidos</span>
        </div>
        <div>
        <small className='purple'>Nº</small>
        </div>
        

        </div>

        <hr></hr>

       <div className='column'>
        <div className='user-rating pt-3 product-rating'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://via.placeholder.com/150'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Producto y su descripción</span>
          
            </div>   
          </div>
          <div>
            <small className='purple'>12</small>
          </div>
        </div>

        <div className='user-rating pt-3 product-rating'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://via.placeholder.com/150'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Producto y su descripción</span>
         
            </div>   
          </div>
          <div>
            <small className='purple'>12</small>
          </div>
        </div>

        <div className='user-rating pt-3 product-rating'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://via.placeholder.com/150'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Producto y su descripción</span>  
            </div>   
          </div>
          <div>
            <small className='purple'>12</small>
          </div>
        </div>
        <div className='user-rating pt-3 product-rating '>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://via.placeholder.com/150'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Producto y su descripción</span>         
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