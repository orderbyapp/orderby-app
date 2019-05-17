import React, { Component } from 'react';
import './Ratingwaiters.css'

class ProductInfo extends Component {
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
          <span>Más Pedidos 2019</span>
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
            <small className='purple'>491</small>
          </div>
        </div>

        <div className='user-rating pt-3 product-rating'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://res.cloudinary.com/dc94hgijj/image/upload/v1558004890/order-by/1558004889921-fingerchips.jpg.jpg'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Finger chips</span>
         
            </div>   
          </div>
          <div>
            <small className='purple'>398</small>
          </div>
        </div>

        <div className='user-rating pt-3 product-rating'>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://res.cloudinary.com/dc94hgijj/image/upload/v1554913591/order-by/patatasbravasanuestramanera.jpg'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Patatas a nuestra manera</span>  
            </div>   
          </div>
          <div>
            <small className='purple'>365</small>
          </div>
        </div>
        <div className='user-rating pt-3 product-rating '>
          <div className='user-rating-info'>
            <img className="image-product-order-item" src={'https://res.cloudinary.com/dc94hgijj/image/upload/v1554913276/order-by/tacos.jpg'} />
            <div className='waiters-data'>
              <span className='p-0 m-0 text-product-dashboard'>Tacos al pastor</span>         
            </div>   
          </div>
          <div>
            <small className='purple'>353</small>
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

export default ProductInfo;