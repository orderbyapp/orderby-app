import React, { Component, Fragment } from 'react';
import ButtonOrder from '../Utilities/Button'
import pinkShape from '../../sources/shape-menu.svg'
import RestaurantCard from './RestaurantCard';
import './Board.css'
import PromotionList from './PromotionList';
import Waiter  from './Waiter'
import { Button,Icon} from 'react-materialize';
import ActionsButton from './ActionButton';
import Menu from './Menu';


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
        { this.state.menuActive && 
          <Fragment>
            <div className='black-blur' >
              <div onClick={this.changeBoard} className='wrap-close' >
              </div>
              <Menu closeBoard={this.changeBoard}></Menu>
            </div>
          </Fragment>
        }
        <div  className={this.state.menuActive && 'blur'} > 
          <div>
            <img src={pinkShape} className='w-100 absolute image-board-bag'></img>
            <RestaurantCard></RestaurantCard>
            <div className='container'>
              <ButtonOrder color='btn btn-order-by' width='w-100' border='border-pink' text='Ver carta'></ButtonOrder>
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