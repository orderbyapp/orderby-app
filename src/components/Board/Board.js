import React, { Component, Fragment } from 'react';
import ButtonOrder from '../Utilities/Button'
import pinkShape from '../../sources/shape-menu.svg'
import RestaurantCard from './RestaurantCard'
import './Board.css'
import PromotionList from './PromotionList'
import Waiter  from '../WaiterInfo/Waiter'
import ActionsButton from '../MenuSide/ActionButton'
import Menu from '../MenuSide/Menu'
import MenuTop from '../MenuTop/MenuTop'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { withTableConsumer } from '../../contexts/TableStore'
import { tableService } from '../../services'
import { getWaiterById } from '../../services/waitersService'
import Slidemenu from '../Slidemenu/Slidemenu'
import OrderLunch from '../OrderLunch/OrderLunch'
import ContentOrder from '../OrderLunch/ContentOrder'

class Board extends Component {

  state = {
    menuActive : false,
    table: {},
    waiter: {},
    restaurant:{},
    order : {
      open : false
    }
  }
  tableSubscription = undefined

  orderVisibility = () => {
    setTimeout(() => {
      this.setState({
        order : {
          open: this.state.order.open ? false : true}
      })
     }, 300)      
  }

  changeBoard = () => {
    this.setState({
      menuActive: this.state.menuActive ? false : true
    })
  }

  waiterVisibility = () => {
    const newTable = {
      ...this.state.table,
      waiterInfo : true
    }
    tableService.updateTable(newTable)
  }

  componentDidMount() {   
      window.scrollTo(0, 0) 
      this.tableSubscription = tableService.onTableChange().subscribe(
      table => this.setState({ 
        table: table,
        orders : table.orders,
        restaurant : table.restaurant,
        waiterInfo : table.waiterInfo || false,
        waiterId : table.restaurant.waiters[0] },
         () => {
          getWaiterById(this.state.waiterId)
          .then(response => this.setState({ waiter: response }))
      })
    );
  }

  componentWillUnmount() {   
    this.tableSubscription.unsubscribe();
  }

  render() {
    if(this.state.table === {}){
        return (<Redirect to='/instructions'></Redirect>)
    } else{
    return (
      <Fragment>
        {!this.state.waiterInfo && <Waiter blur={this.state.menuActive} {...this.state.waiter} waiterVisibility={this.waiterVisibility}/>}
        <MenuTop colorFix />
        { this.state.menuActive && 
          <Fragment>
            <div className='black-blur' >
              <div onClick={this.changeBoard} className='wrap-close' >
              </div>
              <Menu closeBoard={this.changeBoard}/>
            </div>
          </Fragment>
        }
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
        <div className={this.state.menuActive ? 'blur' : ''} > 
          <div className='pt-5'>
        
            <img alt='shapepink' src={pinkShape} className='w-100 absolute image-board-bag'></img>
            <RestaurantCard {...this.state.restaurant} tableNumber={this.state.table.tableNumber}/>
            
            <div className='container'>
              <Link to={`/orderboard`}><ButtonOrder color='btn btn-order-by' width='w-100' border='border-pink' text='Ver carta'/></Link>
              <PromotionList {...this.state} openMenu={this.orderVisibility}/>
            </div>
          </div>
          <ActionsButton activeMenuBoard={this.changeBoard}/>
        </div>
        </div>
      </Fragment>      
    )};
  }
}
export default withRouter(withTableConsumer(Board))
