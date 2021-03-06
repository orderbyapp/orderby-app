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
      <div>

      
    <div className='background-div-color page-content-management background-div-color'>
    

      <div className="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" className="btn btn-sm btn-dark" onClick={this.openMenu}>
          <i className="fas fa-bars white"></i>
        </a>
        <MenuManagmnet></MenuManagmnet>
        <main className="page-content ">
          <div id="contentid" class="container-fluid bg-transparent">      
</div>
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
              <small class="list-group-item-text title purple ">Puesto / Acciones</small>
            
            </div>
            </div>
        </div>

      <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://www.zwettlers.com/typo3temp/pics/Mitzi_01_63cefd5127.jpg" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">María García</h4>
                <p class="list-group-item-text title  description-list-users">Camarera</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarera</p>
              <div className='pt-1 flex-icons-users'>
                <i class="fas fa-pen-square font1 purple"></i>
                <i class="fas fa-user orange"></i>
                <i class="fas fa-times-circle font1 pink"></i>
                <i class="fas fa-envelope-square font2 yellow" data-toggle="modal" data-target="#emailModal"></i>
              </div>
            </div>
            </div>
        </div>
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://res.cloudinary.com/dc94hgijj/image/upload/v1555053084/order-by/1555053083808-guy_rothblum_square.jpg.jpg" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">Luis del Huerto</h4>
                <p class="list-group-item-text title description-list-users">Camarero</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarero</p>
              <div className='pt-1 flex-icons-users'>
                <i class="fas fa-pen-square font1 purple"></i>
                <i class="fas fa-user orange"></i>
                <i class="fas fa-times-circle font1 pink"></i>
                <i class="fas fa-envelope-square font2 yellow" data-toggle="modal" data-target="#emailModal"></i>
              </div>
            </div>
            </div>
        </div>
       
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://res.cloudinary.com/dc94hgijj/image/upload/v1553732498/order-by/1553732497061-waiter.jpg.jpg" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">Paco Romero</h4>
                <p class="list-group-item-text title description-list-users">Camarero</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Camarero</p>
              <div className='pt-1 flex-icons-users'>
                <i class="fas fa-pen-square font1 purple"></i>
                <i class="fas fa-user orange"></i>
                <i class="fas fa-times-circle font1 pink"></i>
                <i class="fas fa-envelope-square font2 yellow" data-toggle="modal" data-target="#emailModal"></i>
              </div>
            </div>
            </div>
        </div>
       


        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmweOVuUEPCA7txq5zcssaffN5Se3ViKZcuz3ALgRbq4tN7bX" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">Benito Molina</h4>
                <p class="list-group-item-text title description-list-users">Cocinero</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Cocinero</p>
              <div className='pt-1 flex-icons-users'>
                <i class="fas fa-pen-square font1 purple"></i>
                <i class="fas fa-user orange"></i>
                <i class="fas fa-times-circle font1 pink"></i>
                <i class="fas fa-envelope-square font2 yellow" data-toggle="modal" data-target="#emailModal"></i>
              </div>
            </div>
            </div>
        </div>
       
        <div class="list-group list pl-3 pr-3 pb-2 pt-2">
        <div className='row p-2 pt-0'>    
         <div class="col-xl-10 pr-4 flex-image-users">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPVqjGbf9W8GQPD_Trng0Gu7e3SVTxdBVby_0dHWiR32iTeNt" class="pull-left photo">
              </img>
              <div className='text-users-list-flex'>
                <h4 class="list-group-item-heading name name-list-users">Luisa Fernández</h4>
                <p class="list-group-item-text title description-list-users">Cocinera</p>
              </div> 
            </div>
            <div class="col-xl-2 text-users-list-flex">
              <p class="list-group-item-text title ">Cocinera</p>
              <div className='pt-1 flex-icons-users'>
                <i class="fas fa-pen-square font1 purple"></i>
                <i class="fas fa-user orange"></i>
                <i class="fas fa-times-circle font1 pink"></i>
                <i class="fas fa-envelope-square font2 yellow" data-toggle="modal" data-target="#emailModal"></i>
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


<div class="modal fade" id="emailModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content border-none bx-sw">
      <div class="modal-header bg-purple text-white">
        <h5 class="modal-title" id="exampleModalLabel"> 
        <i class="fas fa-envelope-square font2 white pr-3" ></i>
          Escribir mail a María</h5>
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label"><i class="far fa-edit purple pr-2"></i> Asunto</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div  className='row'>
          <div class="form-group col-xl-12 col-md-12">
            <label for="recipient-name" class="col-form-label">
            <i class="far fa-file-alt purple pr-3"></i>
            Mensaje</label>
            <textarea type="text" height='300px' class="form-control text-area-email" id="recipient-name"></textarea>
          </div>

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-pink" data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-outline-info">Enviar</button>

      </div>
    </div>
  </div>
</div>
    </div>
    )
  }
}

export default IntroManagment