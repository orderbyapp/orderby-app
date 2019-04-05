import React, { Component, Fragment } from 'react';
import MenuTop from '../MenuTop/MenuTop';
import ProductItem from './ProductItem';
import './Products.css'
import Menu from '../MenuSide/Menu'
import ActionsButton from '../MenuSide/ActionButton'
import Parapicarimg from '../../sources/parapicar.jpg'
import ProductModalDetail from './ProductModalDetail'
import TableService from "../../services/TableService";
import Slidemenu from '../Slidemenu/Slidemenu'
import OrderLunch from '../OrderLunch/OrderLunch'
import ContentOrder from '../OrderLunch/ContentOrder';
import '../MenuTop/MenuTop.css'
import './Toast.css'

class ListProducts extends Component {
  state = {
    menuActive : false,
    modal : {
      product : {},
      show : false
    },
    orders : [],
    list: [],
    order : {
      open : false
    },
  }

  orderVisibility = () => {
    setTimeout(() => {
      this.setState({
        order : {
          open: this.state.order.open ? false : true}
      })
     }, 300)      
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
    const { image, category } = this.props.location.state
    const renderCards = this.state.list.map( food => {
      if((this.state.orders.map(product => product.title)).includes(food.title)){        
        const currentOrder = this.state.orders.filter(currentFood => currentFood.title === food.title)
        return <ProductItem modalOn={this.modalDetail} key={food.id} ordered={true} {...currentOrder[0]}/>
      }

      return <ProductItem modalOn={this.modalDetail} key={food.id} {...food} />
     })
    return (
      <div>
        { this.state.menuActive && 
          <Fragment>
            <div className='black-blur margin-top-16' >
              <div onClick={this.changeBoard} className='wrap-close' >
              </div>
              <Menu closeBoard={this.changeBoard}/>
            </div>
          </Fragment>
        } 
        <MenuTop />
      
        <div  className={this.state.menuActive ? 'blur' : ''} >
          <Slidemenu open={this.state.order.open} >
          <Fragment>
            <OrderLunch>
            {this.state.order.open && 
             <ContentOrder visibilityMenu={this.orderVisibility}/>
              }
            </OrderLunch>
          </Fragment>
        </Slidemenu>
          <div>
            <img className='w-100 image-top-list' src={image}></img>
          </div>
          <div className='pt-3 container'>
            <div className=' text-center '>
              <h5 className='m-0 p-0'>{category}</h5>
              <hr className='border-dark pb-2'></hr>
            </div>
            {renderCards}
          </div>
          <ActionsButton activeMenuBoard={this.changeBoard}/>
        </div>
         {this.state.modal.show && 
          <ProductModalDetail {...this.state.modal.product} openMenu={this.orderVisibility} {...this.props} closeModal={this.closeModal} productDetail={this.state.modal.product}/>}
      </div>
    );
  }
}

export default ListProducts;