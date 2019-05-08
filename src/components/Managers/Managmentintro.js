import React, { Component } from 'react'
import './Login.css'
import './Menuanimated'
import './Menu.css'
import MenuManagmnet from  './Menu'
import svgBottom from '../../sources/pink-top-management.svg'
import './MainManagement.css'
import IntroCards from './Dashboard'
import $ from 'jquery'; 
import Oval1 from '../../sources/oval-dashboard-1.svg'
import Oval2 from '../../sources/oval-dashboard-2.svg'




class IntroManagment  extends Component {
  state = {
   
  }

  openMenu = () => {
    $(".page-wrapper").addClass("toggled");
  }


  render() {
 
    return (
    <div className='background-div-color page-content-management'>
    <img src={Oval1} className='oval1-dashboard'></img>
    <img src={Oval2} className='oval2-dashboard'></img>

      <div className="page-wrapper chiller-theme toggled">
      <MenuManagmnet></MenuManagmnet>
        <a   id="show-sidebar" className="btn btn-sm btn-dark" onClick={this.openMenu}>
          <i className="fas fa-bars white"></i>
        </a>
        
        <main class="page-content background-div-color">
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