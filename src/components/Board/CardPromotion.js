import React, { Component } from 'react'
import './CardPromotion.css'
import Skeleton from 'react-skeleton-loader'

class CardPromotion extends Component {
  state = {
    imageUrl : '',
    loaded : false,
  }

  modalOn = () => {
    this.props.modalOn({...this.props})
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        imageUrl : this.props.image0 || 'https://cdn-3.expansion.mx/dims4/default/4738f15/2147483647/strip/true/crop/650x434+0+0/resize/800x534!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fc3%2F79%2Fcbe0f67f402085f477e72529205d%2Fth-031116-jacinta-020.jpeg'
      }, () => {
        this.setState({loaded: true})
      })
    }, 1000)
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="" onClick={this.modalOn}>
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
                { this.props.ordered && 
                    <div className='add-promotion-card-selected' >
                      <div className='button-more-promotions d-flex'>
                      <i className="material-icons white font-17 edit-white-selected">edit</i>
                    </div>
                </div>}
                { !this.props.ordered &&    
                    <div className='add-promotion-card' >
                      <div className='button-more-promotions'>
                      <span className="more-icon-promotions" >+</span>
                    </div>
                </div>}
            </div>
          </div> 
        </div> 
      );
    } else {
        return (
          <div className='mt-3'>
            <Skeleton width='33%' widthRandomness='0' borderRadius='3px' height='115px'></Skeleton>
            <Skeleton width='1%' widthRandomness='0' borderRadius='5px' height='115px' animated={false} color='transparent'></Skeleton>
            <Skeleton width='66%' widthRandomness='0' borderRadius='3px' height='115px'></Skeleton>
          </div>
        )
    } 
  }
}

export default CardPromotion;