import React, { Component } from "react";
import TableService from "../../services/TableService";

class OrderItem extends Component {
  state = {
    table: null
  };

  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table },()=>console.log(this.state))
  )};

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
  }
  render() {
    const { table } = this.state;
    return (
      table && table.orders.map(product => {
        return (
          <div className="list-object-order" key={product.id}>
            <div className=" item-object-flex border-bottom pb-2 pt-2 border-light">
              <div>
                <div className=" white item-object-flex">
                  <div className="image-product-order-item"><img className="image-product-order-item"src={product.image}/></div>
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
              <div className="price-object-order white">{product.price}</div>
            </div>
          </div>
        );
      })
    );
  }
}

export default OrderItem;
