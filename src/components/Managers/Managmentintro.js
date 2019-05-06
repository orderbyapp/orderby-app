import React, { Component } from 'react'
import './Login.css'
import './Menuanimated'
import './Menu.css'
import MenuManagmnet from  './Menu'
import svgBottom from '../../sources/pink-top-management.svg'
import './MainManagement.css'
import IntroCards from './Dashboard'
import $ from 'jquery'; 




class IntroManagment  extends Component {
  state = {
   
  }

  openMenu = () => {
    $(".page-wrapper").addClass("toggled");
  }


  render() {
 
    return (
    <div className='background-div-color page-content-management'>
      <div className="page-wrapper chiller-theme toggled">
        <a   id="show-sidebar" className="btn btn-sm btn-dark" onClick={this.openMenu}>
          <i className="fas fa-bars white"></i>
        </a>
        <MenuManagmnet></MenuManagmnet>
        <main class="page-content">
          <div id="contentid" class="container-fluid">
          <IntroCards></IntroCards>
          </div>
        </main>
      </div>
    </div>
    )
  }
}

export default IntroManagment