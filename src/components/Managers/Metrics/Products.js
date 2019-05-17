import React, { Component } from 'react';
import '../Ratingwaiters.css'

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
          <span>Top 3 Más Pedidos - <small>(Semana actual)</small></span>
        </div>
        <div>
        <small className='purple'>Nº</small>
        </div>
        

        </div>

        <hr></hr>
        <div className='column'>
        <div className='user-rating pt-3 product-rating'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://res.cloudinary.com/dc94hgijj/image/upload/v1558005185/order-by/1558005185123-burguer-menu.jpg.jpg'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Burger XXL</span>
         
            </div>   
          </div>
          <div>
            <small className='purple'>52</small>
          </div>
        </div>

        <div className='user-rating pt-3 product-rating'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://res.cloudinary.com/dc94hgijj/image/upload/v1558005484/order-by/1558005484096-tartaqueso.jpg.jpg'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Tarta de queso</span>
          
            </div>   
          </div>
          <div>
            <small className='purple'>36</small>
          </div>
        </div>

        <div className='user-rating pt-3 product-rating'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://res.cloudinary.com/dc94hgijj/image/upload/v1558005232/order-by/1558005232282-lapizzamasfina.jpg.jpg'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>La pizza mas fina</span>  
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