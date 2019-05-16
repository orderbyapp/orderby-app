import React, { Component } from 'react'
import '../Menuanimated'
import '../Menu.css'
import MenuManagmnet from  '../Menu'
import $ from 'jquery'; 
import Oval1 from '../../../sources/oval-dashboard-1.svg'
import Oval2 from '../../../sources/oval-dashboard-2.svg'
import './Users.css'
import ChartIncome from './incomeUsersDetail'

class IncomeUsers  extends Component {
  state = {
   
  }

  openMenu = () => {
    $(".page-wrapper").addClass("toggled");
  }


  render() {
 
    return (
      <div>
 
<div id="users">
  <div class="">
    <div class="row p-3 ">
      <div class="col-md-12 container-white-users p-4">
      <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
             
          
          <h4 class="list-group-item-heading name name-list-users">  <i class="fa fa-users calendar-chart"></i>Plantilla</h4>
              
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <small class="list-group-item-text title purple "><i class="fa fa-star calendar-chart"> </i>Valoración / Año</small>
            
            </div>
            </div>
        </div>

      <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-8 pr-4 flex-image-users">
              <img src="https://www.zwettlers.com/typo3temp/pics/Mitzi_01_63cefd5127.jpg" class="pull-left photo photo-charts">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">María García</h4>
                <p class="list-group-item-text title  description-list-users">Camarera</p>
              </div> 
            </div>
            <div class="col-xl-4 text-users-list-flex ">
              <ChartIncome data={[10,20,55,65, 59, 80, 81, 82, 75, 40,0,100]}></ChartIncome>
            </div>
            </div>
        </div>
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-8 pr-4 flex-image-users">
              <img src="https://res.cloudinary.com/dc94hgijj/image/upload/v1555053084/order-by/1555053083808-guy_rothblum_square.jpg.jpg" class="pull-left photo photo-charts">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">Luis del Huerto</h4>
                <p class="list-group-item-text title description-list-users">Camarero</p>
              </div> 
            </div>
            <div class="col-xl-4 text-users-list-flex">
            <ChartIncome data={[10,20,45,45, 29, 80, 11, 12, 24, 40,0,100]}></ChartIncome>
            </div>
            </div>
        </div>
       
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-8 pr-4 flex-image-users">
              <img src="https://res.cloudinary.com/dc94hgijj/image/upload/v1553732498/order-by/1553732497061-waiter.jpg.jpg" class="pull-left photo photo-charts">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">Paco Romero</h4>
                <p class="list-group-item-text title description-list-users">Camarero</p>
              </div> 
            </div>
            <div class="col-xl-4 text-users-list-flex">
            <ChartIncome data={[10,30,78,85, 89, 89, 8, 82, 75, 90,0,100]}></ChartIncome>

            </div>
            </div>
        </div>
       


        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-8 pr-4 flex-image-users">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmweOVuUEPCA7txq5zcssaffN5Se3ViKZcuz3ALgRbq4tN7bX" class="pull-left photo photo-charts ">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">Benito Molina</h4>
                <p class="list-group-item-text title description-list-users">Cocinero</p>
              </div> 
            </div>
            <div class="col-xl-4 text-users-list-flex">
            <ChartIncome data={[110,201,551,635, 359, 830, 381, 832, 375, 40,0,100]}></ChartIncome>

            </div>
            </div>
        </div>
       
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-8 pr-4 flex-image-users">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPVqjGbf9W8GQPD_Trng0Gu7e3SVTxdBVby_0dHWiR32iTeNt" class="pull-left photo photo-charts">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">Luisa Fernández</h4>
                <p class="list-group-item-text title description-list-users">Cocinera</p>
              </div> 
            </div>
            <div class="col-xl-4 text-users-list-flex">
            <ChartIncome data={[167,467,778,857, 879, 977, 887, 782, 775, 970,0,100]}></ChartIncome>

            </div>
            </div>
        </div>
  
       
      </div>
    </div>
  </div>

          </div>
    </div>
    )
  }
}

export default IncomeUsers