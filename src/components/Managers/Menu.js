import React, { Component } from 'react'
import './Login.css'
import './Menuanimated'
import './Menu.css'
import svgBottom from '../../sources/pink-waiters-svg.svg'

class MenuManagmnet extends Component {
  state = {
   
  }


  render() {
 
    return (
      <div className='background-div-color'>
      <div className='top-navbar-management'>
      <div id="close-sidebar">
                <i className="fas fa-times"></i>
              </div>
        <div>
          <i class="fas fa-power-off white pl-4"></i>
        </div>
      </div>
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content">
            <div className="sidebar-brand">
              <a>restaurant.name</a>
             
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                  alt="User picture"></img>
              </div>
              <div className="user-info">
                <span className="user-name">Jhon
                  <strong> Smith</strong>
                </span>
                <span className="user-role">Administrator</span>
                <span className="user-status">
                  <i className="fa fa-circle"></i>
                  <span>Online</span>
                </span>
              </div>
            </div>
            
            <div className="sidebar-search">
              <div>
                <div className="input-group">
                  <input type="text" className="form-control search-menu" placeholder="Buscar..."></input>
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="sidebar-menu">
              <ul>
                <li className="header-menu">
                  <span>General</span>
                </li>
                <li className="sidebar-dropdown">
                  <a>
                    <i className="fas fa-tachometer-alt"></i>
                    <span>Escritorio</span>
                  </a>
                  {/* <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a>Perfil
                        </a>
                      </li>
                      <li className='grey-edit-li'>
                        <a>Editar pefil</a>
                      </li>
                  
                    </ul>
                  </div> */}
                </li>
                <li className="sidebar-dropdown">
                  <a>
                    <i className="fa fa-user"></i>
                    <span>Perfil</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a>Products
      
                        </a>
                      </li>
                      <li>
                        <a>Orders</a>
                      </li>
                      <li>
                        <a>Credit cart</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <a>
                  <i class="fas fa-file-alt"></i>
                     <span>Menús</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a>General</a>
                      </li>
                      <li>
                        <a>Panels</a>
                      </li>
                      <li>
                        <a>Tables</a>
                      </li>
                      <li>
                        <a>Icons</a>
                      </li>
                      <li>
                        <a>Forms</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <a>
                    <i className="fa fa-chart-line"></i>
                    <span>Métricas</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a>Pie chart</a>
                      </li>
                      <li>
                        <a>Line chart</a>
                      </li>
                      <li>
                        <a>Bar chart</a>
                      </li>
                      <li>
                        <a>Histogram</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="sidebar-dropdown">
                  <a>
                    <i className="fa fa-globe"></i>
                    <span>Maps</span>
                  </a>
                  <div className="sidebar-submenu">
                    <ul>
                      <li>
                        <a>Google maps</a>
                      </li>
                      <li>
                        <a>Open street map</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="header-menu">
                  <span>Extra</span>
                </li>
                <li>
                  <a>
                    <i className="fa fa-book"></i>
                    <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-calendar"></i>
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-folder"></i>
                    <span>Examples</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
      
        </nav>
      </div>
    )
  }
}

export default MenuManagmnet