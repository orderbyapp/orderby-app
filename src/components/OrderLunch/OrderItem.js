import React, { Component } from "react";

class OrderItem extends Component {
  render() {
    return (
      <div className="list-object-order">

        <div className=" item-object-flex border-bottom pb-2 pt-2 border-light">
          <div>
            <div className=" white item-object-flex">
              <div className="image-product-order-item" />
              <div className="quantity-product-order-item ml-3">
                x <span>3</span>
              </div>
              <div className="quantity-product-order-item ml-3">
                <span className="description-product-order">
                  descv as asdf asdfsadfa asdfaso
                </span>
              </div>
            </div>
          </div>
          <div className="price-object-order white">w34</div>
        </div>

        <div className=" item-object-flex border-bottom pb-2 pt-2 border-light">
          <div>
            <div className=" white item-object-flex">
              <div className="image-product-order-item" />
              <div className="quantity-product-order-item ml-3">
                x <span>3</span>
              </div>
              <div className="quantity-product-order-item ml-3">
                <span className="description-product-order">
                  descv as asdf asdfsadfa asdfaso
                </span>
              </div>
            </div>
          </div>
          <div className="price-object-order white">w34</div>
        </div>

        <div className=" item-object-flex border-bottom pb-2 pt-2 border-light">
          <div>
            <div className=" white item-object-flex">
              <div className="image-product-order-item" />
              <div className="quantity-product-order-item ml-3">
                x <span>3</span>
              </div>
              <div className="quantity-product-order-item ml-3">
                <span className="description-product-order">
                  descv as asdf asdfsadfa asdfaso
                </span>
              </div>
            </div>
          </div>
          <div className="price-object-order white">w34</div>
        </div>
      </div>
    );
  }
}

export default OrderItem;
