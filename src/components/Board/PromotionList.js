import React, { Component } from 'react';
import CardPromotion from './CardPromotion';
import './PromotionList.css'
import './CardPromotion.css'
import Promotions from '../../data/promotions.json'

class PromotionList extends Component {
  render() {
    const renderCards = Promotions.map( prom => {
      return <CardPromotion {...prom}></CardPromotion>
    })
    return (
      <div className="card-list-div">
      <h5>Promociones</h5>
        {renderCards}
      </div>
    );
  }
}

export default PromotionList;