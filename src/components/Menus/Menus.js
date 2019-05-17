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

  productList = () => ( this.props.product &&
    this.state.product.map((product, index) => {
      return <div className='row border-bottom pt-2 pb-2'>
         <div className='col-xl-2 col-md-4 col-6 '>
         <img className='max-size-image-list' src={product.photo}></img>
         </div>
         <div className='col-xl-8 col-md- col-6 d-flex align-items-center'>
         <p className='p-0 m-0'>{product.title}</p>
         </div>
         <div className='col-xl-2 col-md- col-6 d-flex align-items-center'>
         <h5 className='purple p-0 m-0'>{product.price} €</h5>
         </div>
      </div>
    }) 
)

  render() {
    console.log(this.props)
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
      
        <a href="#" data-toggle="modal" data-target="#exampleModal"  class="btn btn-outline-purple w-100 mt-2"><i class="fas fa-list-ul pr-2"></i>Listar Platos</a>

        </div>
        
      </div>
    </div> 
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content border-none bx-sw">
      <div class="modal-header bg-purple text-white">
        <h5 class="modal-title" id="exampleModalLabel"> 
      <i class="fas fa-utensils text-white pr-3"></i>
{this.props.title}</h5>
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div className='overflow-hidden-listproduct'>      
            {this.productList()}
          </div>
          
          <div class="form-group">

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-pink" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-outline-info">Confirmar</button>

      </div>
    </div>
  </div>
</div>
    </div>
     
     
    );
  }
}
