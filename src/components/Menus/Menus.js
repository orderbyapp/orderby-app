import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../services/MenuService';
import './Menu.css'
import Carousel from 'react-bootstrap/Carousel'


export default class Menus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: this.props.product,
      index: 0,
      direction: null,
    }
    this.handleSelect = this.handleSelect.bind(this);
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
        return <Carousel.Item>
      <div className="delete-head-card"><i data-id={product.id} className="fas fa-times mr-2 f-1 black" onClick={this.delete}></i></div>
      <img
            // className="d-block w-100"
            className='d-block'
            src='https://us.123rf.com/450wm/claudiodivizia/claudiodivizia1503/claudiodivizia150300615/38156827-papel-de-color-gris-claro-%C3%BAtil-como-fondo.jpg?ver=6'
            alt="First slide"
          />
        <Carousel.Caption>
        <img
          className="d-block W-100"
          src={product.photo}
          alt="First slide"
        />
        <div >
          <h5>{product.title}</h5>
          <p>{product.description}</p>
          <p>{product.price} €</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      }) 
  )
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
    
        <div className="card box mt-3" >
        <i data-id={this.props.id} className="fas fa-times mr-2" onClick={this.props.deleteMenu}></i>
                <div className='background-card'></div>
                  <div className="card-body pt-5 mt-5 body-category-info">
              <h4 className='pb-0 mb-0'>{this.props.title}</h4>
              <p className="card-text">{this.props.description}</p>
              <img
                src={this.props.photo}
                alt="First slide"
              />
              <Link to={{pathname: '/manager/new-product', state: {menu:this.props.id}}}>Añade producto</Link>  
              <div className="ml-20">
              <Carousel  activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}>
           {this.productList()}
       </Carousel>
            </div>
            </div>
          </div>
      
     
    );
  }
}