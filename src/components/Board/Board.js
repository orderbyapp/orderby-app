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
import { Link, withRouter } from 'react-router-dom'
import { withTableConsumer } from '../../contexts/TableStore';
import { tableService } from '../../services'
import { getWaiterById } from '../../services/waitersService'

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
        waiterId : table.restaurant.waiters[0] }, () => {
          getWaiterById(this.state.waiterId)
          .then(response => this.setState({ waiter: response }))
      })
    );
  }

  componentWillUnmount() {   
    this.tableSubscription.unsubscribe();
  }

  render() {
    return (
      <Fragment>
        {!this.state.waiterInfo && <Waiter blur={this.state.menuActive} {...this.state.waiter} waiterVisibility={this.waiterVisibility}/>}
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
