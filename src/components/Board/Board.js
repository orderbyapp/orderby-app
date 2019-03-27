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
import {Link} from 'react-router-dom'


// Requerir el Observable
// Link para la carta
// hay que poner menu carrito

class Board extends Component {

  state = {
    menuActive : false
  }

  changeBoard = () => {
    this.setState({
      menuActive: this.state.menuActive ? false : true
    },() => console.log(this.state))
  }

  render() {
    return (
      <Fragment>
        <Waiter blur={this.state.menuActive}></Waiter>
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
            <RestaurantCard></RestaurantCard>
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

export default Board;