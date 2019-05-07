import React, { Component } from 'react'
import '../Menuanimated'
import '../Menu.css'
import './Profile.css'
import MenuManagmnet from  '../Menu'
import $ from 'jquery'; 
import Oval1 from '../../../sources/oval-dashboard-1.svg'
import Oval2 from '../../../sources/oval-dashboard-2.svg'



class IntroManagment  extends Component {
  state = {
   
  }

  openMenu = () => {
    $(".page-wrapper").addClass("toggled");
  }


  render() {
 
    return (
    <div className='background-div-color page-content-management'>
    <img src={Oval1} className='oval1-dashboard opacity-50'></img>
    <img src={Oval2} className='oval2-dashboard opacity-50'></img>

      <div className="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" className="btn btn-sm btn-dark" onClick={this.openMenu}>
          <i className="fas fa-bars white"></i>
        </a>
        <MenuManagmnet></MenuManagmnet>
        <main className="page-content background-div-color">
          <div id="contentid" class="container-fluid">
            <div className='row'>
              <div className='col-xl-4  container-image-profile'>
                <img src='https://via.placeholder.com/150' className='border-radius-100'></img>
              </div>
            </div>
          </div>
        </main>
      </div>
      
    </div>
    )
  }
}

export default IntroManagment