import React, { Component } from 'react';
import './Menu.css'


class Menu extends Component {


  closeCard = () => {
    this.props.closeCard()
  }

  render() {
    return (
      <div className='container '>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-9 menu-absolute slide-in-blurred-right'>
          <ul className="nav flex-column list-menu">
            <li className="nav-item p-2 border-bottom">
              <div className="nav-link">Llamar al Camarero</div>
            </li>
            <li className="nav-item p-2 border-bottom">
              <div className="nav-link" href="#">Pedir Cuenta</div>
            </li>
            <li className="nav-item p-2 border-bottom">
              <div className="nav-link" href="#">Pagar por la APP</div>
            </li>
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

export default Menu;