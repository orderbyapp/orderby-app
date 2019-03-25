import React, { Component, Fragment } from 'react';
import './Board.css'
import FoodTypeCard from './FoodTypeCard';
import Categories from  '../../data/categories.json'
import ActionsButton from '../Board/ActionButton';
import Menu from '../Board/Menu'
import MenuTop from '../OrderBoard/MenuTop'
import '../Board/Board.css'
import '../Board/Menu.css'
import PinkShapeBg from '../../sources/pinkshapebg.svg'

class OrderBoard extends Component {
  state = {
    menuActive : false
  }


  changeBoard = () => {
    this.setState({
      menuActive: this.state.menuActive ? false : true
    },() => console.log(this.state))
  }
  

  render() {
    const renderCards =  Categories.map( ctg => {
      return <FoodTypeCard {...ctg}></FoodTypeCard>
     })
     
    return (
      <div className='order-board-bg'>
      <MenuTop></MenuTop>
      <img alt='pinkshapebg' src={PinkShapeBg} className='pinkshapebg'></img>
      { this.state.menuActive && 
          <Fragment>
            <div className='black-blur margin-top-16' >
              <div onClick={this.changeBoard} className='wrap-close' >
              </div>
              <Menu closeBoard={this.changeBoard}></Menu>
            </div>
          </Fragment>
        } 
        <div className='container-top-margin'>
          <div className='container'>
          {renderCards}
          </div> 
        </div>
        <ActionsButton activeMenuBoard={this.changeBoard}></ActionsButton>
      </div>
    );
  }
}

export default OrderBoard;