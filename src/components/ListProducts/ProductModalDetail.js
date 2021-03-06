import React, { Component } from 'react'
import './Input.css'
import Button from '../Utilities/Button'
import { tableService } from '../../services'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { css } from 'glamor'
import CloseToast from './CloseToast'

class ProductModalDetail extends Component {
  state = {
    class : '',
    product : {...this.props},
    quantity : this.props.quantity || 1,
    table:{},
    instruction: this.props.instruction || '',
  }

  orderVisibilityModal = () => {
    this.props.openMenu()
  }

  closeModal = () => {
    this.setState({
      class : 'fade-out-bottom'
    }, () => setTimeout(() => {this.props.closeModal()}, 300))
  }

  handleInputChange = (e) =>{
    this.setState({
      instruction : e.target.value
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

  addProduct = () => {
   if(this.state.quantity > 0){  // product: id, quantity, instructions, price
    const { product, quantity, instruction} = this.state;
    const productToAdd = {
      id: product.id,
      title: product.title,
      image0: product.image0,
      description: this.props.description,
      quantity,
      instruction,
      price: product.price
    }
    const newTable = {...this.state.table};
    newTable.orders.push(productToAdd);
    
    tableService.updateTable(newTable);

    this.createToast(productToAdd);

    this.closeModal()} else {
      this.deleteProduct()
    }
  }

  updateProduct = () => {
    if(this.state.quantity > 0){ 
    const { product, quantity, instruction} = this.state;
    const productToAdd = {
      id: product.id,
      title: product.title,
      image0: product.image0,
      description: this.props.description,
      quantity,
      instruction,
      price: product.price
    }
    const newTable = {...this.state.table};
    let indexProduct
    
    newTable.orders.forEach((elem, i) => {
      if(elem.title === this.props.productDetail.title){ indexProduct = i }})

    newTable.orders.splice(indexProduct, 1, productToAdd);
    tableService.updateTable(newTable);

    this.createToast(productToAdd);
    this.closeModal()}else {
      this.deleteProduct()
    }
  }

  deleteProduct = () => {
    const newTable = {
      ...this.state.table,
      orders :  this.state.table.orders.filter(order => order.title !== this.props.title)
    };
    tableService.updateTable(newTable);
    this.closeModal()
  }

  closeToasting = () => {
    this.props.openMenu()
  }

  createToast = (product) => {
    toast.configure({
      autoClose: 4000,
      draggable: true,
      position: 'top-center',
      className: 'toaster',
      closeButton: <CloseToast/>
    
    });
      const notify = () => toast(
      <div className='d-flex flex-row align-items-center' onClick={this.orderVisibilityModal}>
        <img className="image-product-order-item" alt={product.title} src={product.image0}/>
         <div className='pl-3 max-width-200'  ><span className='white'>x</span><span className='white'>{product.quantity}</span> {product.title}</div>
      </div>
      ,{
        className: css({
          background: '#26273d !important'
        }),
        bodyClassName: css({
          fontSize: '19px'
        }),
        progressClassName: css({
          background: '#fe3569 !important'
        })
      });

      notify()
      
  }


  componentDidMount() {
    this.tableSubscription = tableService.onTableChange().subscribe(
      table => this.setState({ 
        table: table,
      })
    );
  }

  componentWillUnmount() {   
    this.tableSubscription.unsubscribe();
  }

  render() {
    const { product } = this.state;
    return (      
      <div className={`modal-detail ${this.state.class} ${this.props.classMargin}`}>   
        <div className='div-image-detail' style={{backgroundImage: `url(${product.image0})`}}>
          <div className='bg-image-detail-color'>     
          </div>
        </div>
        <a className='button-close-modal mr-2' onClick={this.closeModal}>
          <span className="material-icons white close-menu-content">clear</span>
        </a> 
        <div className='mt-4'>
          <h5 className='product-title-modal'>{product.title}</h5>
        </div>
        <div className='container mt-3'>
        <p className='text-center description-product-modal'>{product.description}</p>
        </div>
        <div className='mt-3'>
          <h5 className='product-price-modal'>{product.price} €</h5>
        </div>
       
        <div className='instrucciones-especiales-title'>
          <p className='container light-font title-special-text'>INSTRUCCIONES ESPECIALES</p>
        </div>
        <div> 
          <form className='container'>
            <input 
            placeholder='Instrucciones para cocina'
            type='text' 
            className='w-100 input-special-instruction'
            onChange={this.handleInputChange} 
            value={this.state.instruction}></input>
            <hr className='mt-0 pt-0'></hr>
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
        {this.props.ordered &&
        <div>
            <Button color='btn btn-pink-color-white mb-2' border='border-pink' onClick={this.deleteProduct} width='w-100' text='Eliminar producto' />
            <Button color='btn btn-order-by' border='border-pink' onClick={this.updateProduct} width='w-100' text='Añadir al pedido' />
        </div>
       }
        {!this.props.ordered &&
        <div>
            <Button color='btn btn-order-by' border='border-pink' onClick={this.addProduct} width='w-100' text='Añadir al pedido' />
        </div>
       }
        </div>
  
      </div>
    );
  }
}

export default ProductModalDetail;