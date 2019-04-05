import React, { Component } from 'react';
import CardPromotion from './CardPromotion';
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
    order : {
      open : false
    },
  }
  orderVisibility = () => {
    setTimeout(() => {
      this.setState({
        order : {
          open: this.state.order.open ? false : true}
      }, () => console.log(this.state.order))
     }, 300)      
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
  render() {
    const renderCards = Promotions.map( prom => {
      return <CardPromotion modalOn={this.modalDetail} key={prom.key} {...prom}></CardPromotion>
    })
    return (
      <div className="card-list-div">
      <h5>Promociones</h5>
        {renderCards}
        {this.state.modal.show && 
          <ProductModalDetail {...this.state.modal.product} openMenu={this.orderVisibility} {...this.props} closeModal={this.closeModal} productDetail={this.state.modal.product}/>}
      </div>
    );
  }
}

export default PromotionList;