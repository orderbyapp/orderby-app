import React, { Component, Fragment } from 'react';
import MenuTop from '../MenuTop/MenuTop';
import ProductItem from './ProductItem';
import Foods from '../../data/foods.json'
import './Products.css'
import Menu from '../MenuSide/Menu'
import ActionsButton from '../MenuSide/ActionButton'
import Parapicarimg from '../../sources/parapicar.jpg'
import ProductModalDetail from './ProductModalDetail'
import TableService from "../../services/TableService";


class ListProducts extends Component {
  state = {
    menuActive : false,
    modal : {
      product : {},
      show : false
    },
    orders : []
  }

  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table, orders : table.orders }, () => console.log(this.state.orders.map(product => product.title)))
  )};

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
  }

  modalDetail = (e) => {
    this.setState({
     modal : {
       ...this.modal,
       product : {...e},
       show : !this.state.modal.show ? true : false
     }
    })
  }

  closeModal = () => {
    this.setState({
      modal : {
        ...this.modal,
        show : !this.state.modal.show ? true : false
      }
     })
  }


  changeBoard = () => {
    this.setState({
      menuActive: this.state.menuActive ? false : true
    },() => console.log(this.state))
  }
  
  render() {
    const renderCards = Foods.map( food => {
      if((this.state.orders.map(product => product.title)).includes(food.title)){
        const currentOrder = this.state.orders.filter(currentFood => currentFood.title === food.title)
        return <ProductItem modalOn={this.modalDetail} {...currentOrder} />
      }
      return <ProductItem modalOn={this.modalDetail} {...food} />
     })
    return (
      <div>
        { this.state.menuActive && 
          <Fragment>
            <div className='black-blur margin-top-16' >
              <div onClick={this.changeBoard} className='wrap-close' >
              </div>
              <Menu closeBoard={this.changeBoard}></Menu>
            </div>
          </Fragment>
        } 
        <MenuTop />
        <div  className={this.state.menuActive ? 'blur' : ''} >
          <div>
            <img className='w-100 image-top-list' src={Parapicarimg}></img>
          </div>
          <div className='pt-3 container'>
            <div className=' text-center '>
              <h5 className='m-0 p-0'>Products</h5>
              <hr className='border-dark pb-2'></hr>
            </div>
            {renderCards}
          </div>
          <ActionsButton activeMenuBoard={this.changeBoard}></ActionsButton>
        </div>
         {this.state.modal.show && 
          <ProductModalDetail {...this.state.modal.product} closeModal={this.closeModal}></ProductModalDetail>}
      </div>
    );
  }
}

export default ListProducts;