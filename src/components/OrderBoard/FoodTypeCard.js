import React, { Component } from 'react';
import './FoodTypeCard.css'
import {Link} from 'react-router-dom'
import Skeleton from 'react-skeleton-loader';

class FoodTypeCard extends Component {
  state = {
    loaded : false,
  }

  modalOn = () => {
    this.props.modalOn({...this.props})
  }

  componentDidMount = () => {
    setTimeout(() => {
        this.setState({loaded: true})
    }, 1000)
  }

  render() {
    if (this.state.loaded) {
    return (
      <div>
        <Link style={{ textDecoration: 'none' }} to={{ 
         pathname: `/menulist/${this.props.name}`,
         state: {
           image: this.props.image0,
           category: this.props.title
          }
        }}>
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
      } else {
      return (
        <div className='mt-3'>
          <Skeleton width='100%' widthRandomness='0' borderRadius='6px' height='192px' color='grey'></Skeleton>
        </div>
      )
  } 
  }
}

export default FoodTypeCard;