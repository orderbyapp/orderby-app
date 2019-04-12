import React, { Component, Fragment } from 'react';
import './Board.css'
import FoodTypeCard from './FoodTypeCard';
import Categories from  '../../data/categories.json'
import ActionsButton from '../MenuSide/ActionButton';
import Menu from '../MenuSide/Menu'
import MenuTop from '../MenuTop/MenuTop'
import '../Board/Board.css'
import '../MenuSide/Menu.css'
import PinkShapeBg from '../../sources/pinkshapebg.svg'
import WaiterCall from '../WaiterInfo/WaiterCall';

class OrderBoard extends Component {
  state = {
    menuActive : false,
    callActive : false,
    table: {},
    orders:{}
  }

  changeBoard = () => {
    this.setState({
      menuActive: this.state.menuActive ? false : true
    })
  }
  showMessage = () => {
    this.setState({
      callActive: this.state.callActive ? false : true
    })
    
  }
 
  render() {
    const renderCards =  Categories.map( ctg => {
      return <FoodTypeCard {...ctg}/>
     })
     
    return (
      <div className='order-board-bg'>
      <MenuTop/>
      {this.state.callActive && <WaiterCall blur={this.state.callActive} {...this.state.waiter} />}

      <img alt='pinkshapebg' src={PinkShapeBg} className='pinkshapebg'></img>
      { this.state.menuActive && 
          <Fragment>
            <div className='black-blur margin-top-16' >
              <div onClick={this.changeBoard} className='wrap-close' >
              </div>
              <Menu closeBoard={this.changeBoard} showCall={this.showMessage}/>
            </div>
          </Fragment>
        }
      <div  className={this.state.menuActive ? 'blur' : ''} > 
        <div className='container-top-margin'>
          <div className='container'>
          {renderCards}
          </div> 
        </div>
        {this.state.table.orders}
        <ActionsButton activeMenuBoard={this.changeBoard}/>
      </div>
      </div>
    );
  }
}

export default OrderBoard;