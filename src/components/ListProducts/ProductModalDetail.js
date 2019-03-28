import React, { Component } from 'react';
import './Input.css'
import Button from '../Utilities/Button';

class ProductModalDetail extends Component {
  state = {
    class : '',
    product : {...this.props},
    quantity : 0
  }

  closeModal = () => {
    console.log(this.state.product)
    this.setState({
      class : 'fade-out-bottom'
    }, () => setTimeout(() => {this.props.closeModal()}, 300))
  }

  handleInputChange = (e) =>{
    this.setState({
      instruction : e.value
    })
  }

  handleQuantity = (e) => {
    const action = e.target.dataset.name
    if(action === 'less' && this.state.quantity > 0){
      this.setState({
        quantity : this.state.quantity - 1,
      })
    } else if (action === 'more'){
      this.setState({
        quantity : this.state.quantity + 1,
      })
    }
  }

  preventDefaultThis = (e) => {
    e.preventDefault()
  }

  render() {
    const product = this.state.product
    return (      
      <div className={`modal-detail ${this.state.class}`}>   
        <div className='div-image-detail' style={{backgroundImage: `url(${product.image})`}}>
          <div className='bg-image-detail-color'>     
          </div>
        </div>
        <button className='button-close-modal' onClick={this.closeModal}>
          <span className="material-icons white close-menu-content">clear</span>
        </button> 
        <div className='mt-4'>
          <h5 className='product-title-modal'>{product.title}</h5>
        </div>
        <div className='mt-3'>
          <h5 className='product-price-modal'>{product.price} €</h5>
        </div>
        <div className='container mt-3'>
        <p className='text-center description-product-modal'>Licenses are valid for one year from the date of purchase.
            When asking for support with any purchased.</p>
        </div>
        <div className='instrucciones-especiales-title'>
          <p className='container light-font title-special-text'>INSTRUCCIONES ESPECIALES</p>
        </div>
        <div> 
          <form className='container'>
            <input 
            type='text' 
            className='w-100 input-special-instruction'
            onChange={this.handleInputChange} 
            value={this.state.instruction}></input>
          </form> 
        </div>
        <div className='container-adder mt-3'>   
          <div className='add-product'>
            <div className='box-container'>
              <span><i  className="material-icons light-grey" data-name='less' onClick={this.handleQuantity}>remove</i></span>
              <h3 className='count-adder'>{this.state.quantity}</h3>
              <span><i className="material-icons light-grey" data-name='more' onClick={this.handleQuantity}>add</i></span>
            </div>
          </div>
        </div>
        <div className='container contain-button-add'>
          <Button color='btn btn-order-by' border='border-pink'  width='w-100' text='Añadir al pedido'></Button>
        </div>
      </div>
    );
  }
}

export default ProductModalDetail;