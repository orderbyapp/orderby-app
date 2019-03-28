import React, { Component } from 'react';
import './FoodTypeCard.css'
import {Link} from 'react-router-dom'


class FoodTypeCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Link to={'/menulist'}>
        <div className="card mt-3 category-card-food" style={{backgroundImage: `url(${this.props.image0})`}}>
          
        <div className='background-card'></div>
          <div className="card-body text-left pt-5 mt-5 body-category-info">
        
            <h4 className='pb-0 mb-0'>{this.props.title}</h4>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  }
}

export default FoodTypeCard;