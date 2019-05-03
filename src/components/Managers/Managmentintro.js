import React, { Component } from 'react'
import './Login.css'
import './Menuanimated'
import './Menu.css'
import MenuManagmnet from  './Menu'
import svgBottom from '../../sources/pink-top-management.svg'
import './MainManagement.css'
import IntroCards from './Dashboard'



class IntroManagment  extends Component {
  state = {
   
  }


  render() {
 
    return (
    <div className='background-div-color page-content-management'>
      <div className="page-wrapper chiller-theme toggled">
        <a   id="show-sidebar" className="btn btn-sm btn-dark">
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