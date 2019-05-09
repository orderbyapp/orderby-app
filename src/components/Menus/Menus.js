import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { deleteProduct } from '../../services/MenuService';


export default class Column extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product
    }
  }

  delete = (e) => {
    const id = e.target.dataset.id
    deleteProduct(id)
      .then(card => {
        this.setState({
          product: this.state.product.filter(c => c.id !== id)
        })
      },
      (error => console.log(error)))
  }

  productList = () => ( this.state.product &&
      this.state.product.map((product, index) => {
        return <Product deleteProduct={this.delete} id={product.id} {...product} key={index} />
      }).reverse()  
  )

  render() {
    console.log("product ", this.state)
    return (
        <div className="w-costum p-2 column">
          <div className="rend-flex">
          <h4 className='ml-2'>{this.props.title}</h4>
          <i data-id={this.props.id} class="fas fa-times mr-2" onClick={this.props.deleteMenu}></i>
          </div>
        <div className='over-flow-card'>
        {this.productList()}
            <Link to={{pathname: '/new-product', state: {position: (this.state.product.length) + 1, column:this.props.id}}}>Add New Card</Link>
        </div>
        </div>
    );
  }
}