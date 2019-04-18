import React, { Component } from 'react'
import CardPromotion from './CardPromotion'
import './PromotionList.css'
import './CardPromotion.css'
import Promotions from '../../data/promotions.json'
import ProductModalDetail from '../ListProducts/ProductModalDetail'

class PromotionList extends Component {
  state = {
    menuActive : false,
    modal : {
      product : {},
      show : false
    },
    orders : [],
  }

  modalDetail = (e) => {
    this.setState({
     modal : {
       ...this.modal,
       product : {...e},
       show : !this.state.modal.show ? true : false
     }
    })
  }

  closeModal = () => {
    this.setState({
      modal : {
        ...this.modal,
        show : !this.state.modal.show ? true : false
      }
     })
  }

  changeBoard = () => {
    this.setState({
      menuActive: this.state.menuActive ? false : true
    })
  }

  render() {
    if(this.props.orders){
      const renderCards = Promotions.map( food => {
        if((this.props.orders.map(product => product.title)).includes(food.title)){        
          const currentOrder = this.props.orders.filter(currentFood => currentFood.title === food.title)
          return <CardPromotion modalOn={this.modalDetail} key={food.id} ordered={true} {...currentOrder[0]}/>
        }
        return <CardPromotion modalOn={this.modalDetail} key={food.id} {...food} />
       })
      return (
        <div className="card-list-div">
        <h5>Promociones</h5>
          {renderCards}
          {this.state.modal.show && 
            <ProductModalDetail classMargin={'margin-left-15'} {...this.state.modal.product} openMenu={this.props.orderVisibility} {...this.props} closeModal={this.closeModal} productDetail={this.state.modal.product}/>}
        </div>
      );
    }
    return null;  
  }
}

export default PromotionList;