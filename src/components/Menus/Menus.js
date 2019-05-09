import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import { deleteProduct } from '../../services/MenuService';


export default class Menus extends Component {
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
   const style = { widht: '150px', height: '150px'}
    return (
        <div className="w-costum p-2 column">
          <div className="rend-flex">
            <h4 className='ml-2'>{this.props.title}</h4>
            <i data-id={this.props.id} className="fas fa-times mr-2" onClick={this.props.deleteMenu}></i>
            <img src={this.props.photo} style={style}alt="preview"></img>
          </div>
        <div className='over-flow-card'>
        {this.productList()}
            <Link to={{pathname: '/manager/new-product', state: {menu:this.props.id}}}>Añade producto</Link>
        </div>
        </div>
    );
  }
}