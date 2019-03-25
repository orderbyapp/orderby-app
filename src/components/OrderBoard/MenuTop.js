import React, { Component } from 'react';
import './MenuTop.css'

class MenuTop extends Component {
  render() {
    return (
      <div className='container-menu margin-top-16'>
        <div className='container padding-menu-nav'>
          <nav className='top-menu'>
            <span class="material-icons white">arrow_back</span>
            <span class="material-icons white">restaurant_menu</span>
          </nav>
        </div>
      </div>
    );
  }
}

export default MenuTop;