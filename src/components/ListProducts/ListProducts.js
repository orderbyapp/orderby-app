import React, { Component, Fragment } from 'react';
import MenuTop from '../OrderBoard/MenuTop';
import ProductItem from './ProductItem';
import Promotions from '../../data/promotions.json'
import './Products.css'
import Menu from '../Board/Menu'
import ActionsButton from '../Board/ActionButton'
import Parapicarimg from '../../sources/parapicar.jpg'
import ProductModalDetail from './ProductModalDetail'

class ListProducts extends Component {
  state = {
    menuActive : false,
    modal : {
      product : {},
      show : false
    }
  }

  modalDetail = (e) => {
    console.log()
    this.setState({
     modal : {
       ...this.modal,
       product : {...e},
       show : !this.state.modal.show ? true : false
     }
    }, () => console.log(this.state.modal.product))
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
    const renderCards =  Promotions.map( ctg => {
      return <ProductItem modalOn={this.modalDetail} {...ctg}></ProductItem>
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
        <MenuTop></MenuTop>
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