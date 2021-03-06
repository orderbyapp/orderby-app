import React, { Component } from 'react';
import { getMenu, deleteMenu } from '../../services/MenuService';
import MenusForm from './MenusForm';
import Menus from './Menus';
import '../Managers/Menuanimated';
import '../Managers/Menu.css';
import MenuManagmnet from '../Managers/Menu';
import $ from 'jquery';
import Oval1 from '../../sources/oval-dashboard-1.svg';
import Oval2 from '../../sources/oval-dashboard-2.svg';

export default class MenuBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
    };
  }

  getMenus = () => {
    getMenu().then(menus => {
      this.setState({
        menus: menus,
      });
    });
  };

  delete = e => {
    const id = e.target.dataset.id;
    deleteMenu(id).then(
      menus => {
        this.getMenus();
      },
      error => console.log(error.response.data)
    );
  };

  componentDidMount = () => {
    this.getMenus();
  };

  renderMenus = () =>
    this.state.menus.map((menus, index) => {
      return <Menus deleteMenu={this.delete} {...menus} key={Math.random()} />;
    });

  openMenu = () => {
    $('.page-wrapper').addClass('toggled');
  };

  render() {
    return (
      <React.Fragment>
        <div className='background-div-color page-content-management background-div-color'>

          <div className='page-wrapper chiller-theme toggled'>
            <a
              id='show-sidebar'
              className='btn btn-sm btn-dark'
              onClick={this.openMenu}
            >
              <i className='fas fa-bars white' />
            </a>
            <MenuManagmnet />
            <main className='page-content'>
              <MenusForm
                currentPosition={this.state.menus.length + 1}
                refresh={this.getMenus}
              />
              
                  <div className='row pt-0'>
                    {this.renderMenus()}

                  </div>
             
              
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
