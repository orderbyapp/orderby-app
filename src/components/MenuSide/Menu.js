import React, { Component } from 'react';
import './Menu.css'
import TableService from "../../services/TableService";
import {Redirect} from 'react-router-dom'

class Menu extends Component {
  state = {
    table : {},
    show: false,
    redirect : false
  }

  closeCard = () => {
    this.props.closeCard()
  }

  showMessage = () => {
    this.props.showCall();
  }
  updateOrder = () => {
    const order = {
      products : this.state.table.orders
    }
    TableService.updateOrder(this.state.table.orderId, order )
      .then(response => response.data)
      this.setState({
        redirect :  true
      })
  }

  postOrder = () => {
    const order = {
      table : this.state.table.id,
      products : this.state.table.orders
    }
    TableService.newOrder(order.table, order)
      .then(response => {
        this.setState({
          table : {
            ...this.state.table,
            orderId : response.data.id
          }
        })
        TableService.updateTable(this.state.table);
        this.setState({
          redirect :  true
        })
      })
  }

  componentDidMount = () => {
    this.tableSubscription = TableService.onTableChange().subscribe(table =>
      this.setState({ table: table}))
    };

  componentWillUnmount() {
    this.tableSubscription.unsubscribe();
  }

  render() {
    
    if(this.state.redirect){
      return(
      <Redirect to='/payment'/>
      )
    } else {
    return (
      <div className='container '>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-9 menu-absolute slide-in-blurred-right'>
          <ul className="nav flex-column list-menu">
            <li className="nav-item p-2 border-bottom" onClick={this.showMessage}>
              <div className="nav-link">Llamar al Camarero</div>
            </li>
            { this.state.table.orders && this.state.table.orders.length > 0 &&
            <li className="nav-item p-2 border-bottom" 
            onClick={ !this.state.table.orderId ? this.postOrder : this.updateOrder }>
              <div className="nav-link" href="#">Pagar por la APP</div>
            </li>
            }
            <li className="nav-item p-1  close-nav-tag">
            <div onClick={this.props.closeBoard}>
              <div className="nav-link disabled flex-close-nav" href="#" >
                <i className={`fa fa-times white-cross`} onClick={this.closeCard}></i>
                <span className="close-text-nav">Cerrar</span>
              </div>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
    );
    }
  }
}

export default Menu;