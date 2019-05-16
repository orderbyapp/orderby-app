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
        return   <div>as</div>
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
    <div className='col-xl-4 col-md-4 col-12 mb-4'>

    <div class="card border-none bx-sw">
    

      <img class="card-img-top" src={this.props.photo} alt="Card image cap"></img>
      <div class="card-body">
      <i  className="fas fa-times mr-2 f-1  crose-delete-food" onClick={this.delete}></i>
        <h5 class="card-title">{this.props.title}</h5>
        <h6 class="card-text grey font-weight-light pb-3">{this.props.description}</h6>
        <div className='flex-center-between'>
        <Link to={{pathname: '/manager/new-product', state: {menu:this.props.id}}}>
         <a href="#" class="btn btn-pink w-100">
        <i class="fa fa-plus pr-2"></i>Añadir Plato</a></Link>  

        <a href="#" class="btn btn-outline-purple w-100 mt-2"><i class="fas fa-list-ul pr-2"></i>Listar Platos</a>

        </div>
        
      </div>
    </div> 
    </div>
     
     
    );
  }
}
