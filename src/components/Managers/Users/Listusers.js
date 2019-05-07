import React, { Component } from 'react'
import '../Menuanimated'
import '../Menu.css'
import MenuManagmnet from  '../Menu'
import $ from 'jquery'; 
import Oval1 from '../../../sources/oval-dashboard-1.svg'
import Oval2 from '../../../sources/oval-dashboard-2.svg'
import './Users.css'

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
       


</div>
<div id="users">
  <div class="">
    <div class="row p-3 ">
      <div class="col-md-12 container-white-users p-4">
      <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
             
                <h4 class="list-group-item-heading name"> Usuarios</h4>
              
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Puesto</p>
            
            </div>
            </div>
        </div>

      <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://gravatar.com/avatar/ff3265b13420b9d301d0005ef494385a?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name">Dr. Kevin Schueller, PhD</h4>
                <p class="list-group-item-text title">Professor of Witchcraft</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarero</p>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
              </div>
            </div>
            </div>
        </div>
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://gravatar.com/avatar/ff3265b13420b9d301d0005ef494385a?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name">Dr. Kevin Schueller, PhD</h4>
                <p class="list-group-item-text title">Professor of Witchcraft</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarero</p>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
              </div>
            </div>
            </div>
        </div>
       
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://gravatar.com/avatar/ff3265b13420b9d301d0005ef494385a?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name">Dr. Kevin Schueller, PhD</h4>
                <p class="list-group-item-text title">Professor of Witchcraft</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarero</p>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
              </div>
            </div>
            </div>
        </div>
       


        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://gravatar.com/avatar/ff3265b13420b9d301d0005ef494385a?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name">Dr. Kevin Schueller, PhD</h4>
                <p class="list-group-item-text title">Professor of Witchcraft</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarero</p>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
              </div>
            </div>
            </div>
        </div>
       
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://gravatar.com/avatar/ff3265b13420b9d301d0005ef494385a?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name">Dr. Kevin Schueller, PhD</h4>
                <p class="list-group-item-text title">Professor of Witchcraft</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarero</p>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
              </div>
            </div>
            </div>
        </div>
       
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://gravatar.com/avatar/ff3265b13420b9d301d0005ef494385a?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name">Dr. Kevin Schueller, PhD</h4>
                <p class="list-group-item-text title">Professor of Witchcraft</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarero</p>
              <div className='pt-1'>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
                <i class="fa fa-star calendar-chart"></i>
              </div>
            </div>
            </div>
        </div>
       



       
      </div>
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