import React, { Component, Fragment } from 'react';
import ButtonOrder from '../Utilities/Button'
import pinkShape from '../../sources/shape-menu.svg'
import RestaurantCard from './RestaurantCard';
import './Board.css'
import PromotionList from './PromotionList';
import Waiter  from '../WaiterInfo/Waiter'
import ActionsButton from '../MenuSide/ActionButton';
import Menu from '../MenuSide/Menu';
import MenuTop from '../MenuTop/MenuTop';
import {Link, withRouter} from 'react-router-dom'
import { withTableConsumer } from '../../contexts/TableStore';
import { tableService } from '../../services'
import {getWaiterById} from '../../services/waitersService'

// Requerir el Observable
// Link para la carta
// hay que poner menu carrito

class Board extends Component {

  state = {
    menuActive : false,
    table: {},
    waiter: {},
    restaurant:{}
  }
  tableSubscription = undefined

  changeBoard = () => {
    this.setState({
      menuActive: this.state.menuActive ? false : true,
      table : tableService.updateTable('43567890'),
      orders : this.state.table.orders
    }, () => {
      console.log(this.state)
    })
  }

  componentWillMount(){

  }

  componentDidMount() {   
      window.scrollTo(0, 0) 
      this.tableSubscription = tableService.onTableChange().subscribe(
      table => this.setState({ 
        table: table,
        orders : table.orders,
        restaurant : table.restaurant,
        waiterId : table.restaurant.waiters[0] }, () => {
          getWaiterById(this.state.waiterId)
          .then(response => this.setState({ waiter: response}))
      })
    );
  }

  componentWillUnmount() {   
    this.tableSubscription.unsubscribe();
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Waiter blur={this.state.menuActive} {...this.state.waiter}></Waiter>
        <MenuTop colorFix ></MenuTop>
        { this.state.menuActive && 
          <Fragment>
            <div className='black-blur' >
              <div onClick={this.changeBoard} className='wrap-close' >
              </div>
              <Menu closeBoard={this.changeBoard}></Menu>
            </div>
          </Fragment>
        }
        <div className={this.state.menuActive ? 'blur' : ''} > 
          <div className='pt-5'>
        
            <img alt='shapepink' src={pinkShape} className='w-100 absolute image-board-bag'></img>
            <RestaurantCard {...this.state.restaurant} tableNumber={this.state.table.tableNumber}></RestaurantCard>
            
            <div className='container'>
              <Link to={`/orderboard`}><ButtonOrder color='btn btn-order-by' width='w-100' border='border-pink' text='Ver carta'></ButtonOrder></Link>
              <PromotionList></PromotionList>
            </div>
          </div>
          <ActionsButton activeMenuBoard={this.changeBoard}></ActionsButton>
        </div>
      </Fragment>      
    );
  }
}
export default withRouter(withTableConsumer(Board))
