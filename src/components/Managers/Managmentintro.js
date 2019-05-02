import React, { Component } from 'react'
import './Login.css'
import './Menuanimated'
import './Menu.css'
import MenuManagmnet from  './Menu'
import svgBottom from '../../sources/pink-waiters-svg.svg'

class IntroManagment  extends Component {
  state = {
   
  }


  render() {
 
    return (
      <div className='background-div-color'>
      <div className="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" className="btn btn-sm btn-dark">
          <i className="fas fa-bars"></i>
        </a>
    <MenuManagmnet></MenuManagmnet>
        <main className="page-content">
        
      
        </main>
      </div>
      </div>
    )
  }
}

export default IntroManagment