import React, { Component } from 'react';
import { getMenu , deleteMenu } from '../../services/MenuService';
import MenusForm from './MenusForm';
import Menus from './Menus';

export default class MenuBoard extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        menus: []
      }
    }

  getMenus = () => {
    getMenu()
    .then(menus => {
      this.setState({
        menus: menus
      })
    })
  }

  delete = (e) => {
    const id = e.target.dataset.id
    deleteMenu(id)
    .then(menus => {
      this.getMenus()
    },
      (error) => console.log(error.response.data)
    )
  }

  componentDidMount = () => {
    this.getMenus();
  }

  renderMenus = () => (
    this.state.menus.map((menus, index) => {
      return <Menus deleteMenu={this.delete} {...menus} key={Math.random()}/>
    })
  )

  render() {
    return (
      <React.Fragment>
      <MenusForm currentPosition={(this.state.menus.length)+1} refresh = {this.getMenus} />
      <div className="section trello-section">
        <div className="container-fluid">
          <div className="row mt-5">
            {this.renderMenus()}
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}