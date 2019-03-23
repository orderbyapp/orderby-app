import React, { Component } from 'react';

class CardPromotion extends Component {

  state = {
    imageUrl : this.props.image || 'https://cdn-3.expansion.mx/dims4/default/4738f15/2147483647/strip/true/crop/650x434+0+0/resize/800x534!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fc3%2F79%2Fcbe0f67f402085f477e72529205d%2Fth-031116-jacinta-020.jpeg'
  }
  
  render() {
    return (
      <div className="card card-promotion-div mt-3">
      <div className="row no-gutters">
          <div className="col-4 image-promotion" style={{backgroundImage: `url(${this.state.imageUrl})`}}>
          </div>
          <div className="col ">
              <div className="card-block px-2 info-promotion-text-div">
                 <h5 className="card-title card-promotion-title">{this.props.title}</h5>
                 <div className='info-promotion'>
                  <p className="card-promotion-text">
                    <i className="fa fa-calendar mr-2 pink"></i>
                    <span className='card-text-span-promotion'>{this.props.date}</span>
                  </p>
                 </div>
                 <div className='add-promotion-card'><div className='button-more-promotions'><span className="more-icon-promotions">+</span></div></div>
              </div>
              <div className='price-promotion-card'>{this.props.price} €</div>
          </div>
      </div>
  </div>
  
    );
  }
}

export default CardPromotion;