import React, { Component } from "react";
import './OrderItem.css'

class OrderItem extends Component {
  render() {
    if (this.props.orders) {
      return (
        this.props.orders &&
        this.props.orders.map(product => {
          return (
            <div className="list-object-order" key={product.id}>
              <div className=" item-object-flex border-bottom pb-2 pt-2 border-light">
                <div>
                  <div className=" white item-object-flex">
                    <div className="image-product-order-item">
                      <img
                        className="image-product-order-item"
                        alt={product.title}
                        src={product.image0}
                      />
                    </div>
                    <div className="quantity-product-order-item ml-3">
                      x <span>{product.quantity}</span>
                    </div>
                    <div className="quantity-product-order-item ml-3">
                      <span className="description-product-order">
                        {product.title}
                      </span>
                    </div>
                  </div>
                </div>
                {this.props.editing && <span className={`white ${'slide-in-blurred-right'} step-bg-2`}>
                  <i class="material-icons white font-17">edit</i>
                 </span>}
                {!this.props.editing && <div className="price-object-order white ">{product.price * product.quantity}€</div>}              </div>
            </div>
          );
        })
      );
    }
    return null;  
  }
}

export default OrderItem;
