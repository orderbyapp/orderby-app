import React, { Component, Fragment } from 'react';
import MenuTop from '../MenuTop/MenuTop';
import ProductItem from './ProductItem';
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
    orders : [],
    list: []
  }

  componentDidMount = () => {
   
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table, orders: table.orders},
        () =>  TableService.getMenuList(this.props.match.params.name)
        .then(response => this.setState({ list : response.data })))
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
    })
  }
  
  render() {
  
    const renderCards = this.state.list.map( food => {
      if((this.state.orders.map(product => product.title)).includes(food.title)){        
        const currentOrder = this.state.orders.filter(currentFood => currentFood.title === food.title)
        return <ProductItem modalOn={this.modalDetail} ordered={true} {...currentOrder[0]} />
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
              <h5 className='m-0 p-0'>{this.state.list[0] && this.state.list[0].category}</h5>
              <hr className='border-dark pb-2'></hr>
            </div>
            {renderCards}
          </div>
          <ActionsButton activeMenuBoard={this.changeBoard}/>
        </div>
         {this.state.modal.show && 
          <ProductModalDetail {...this.state.modal.product} {...this.props} closeModal={this.closeModal} productDetail={this.state.modal.product}/>}
      </div>
    );
  }
}

export default ListProducts;