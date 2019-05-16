import React, { Component } from 'react';
import { newMenu } from '../../services/MenuService';

export default class MenusForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: {
        title: '',
        description: '',
        attachment: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    newMenu({ ...this.state.menu })
    .then(data => 
      this.props.refresh()
    )
  }

  handleChange = (e) => {
    const {name} = e.target;

    if(e.target.files){
      this.setState({
        menu : {
          ...this.state.menu,
          [name]: e.target.value,
          attachment : e.target.files ? e.target.files[0] : e.target.value,
        }
      })
    } else {
      this.setState({
        menu : {
          ...this.state.menu,
          [e.target.name]: e.target.value
        }
      })
    }
  }

  render() {
    return (
      <div>
        <div className='pl-3 bg-white p-4 card-form-menus'>

      
      
    <form onSubmit={this.handleSubmit} className=' row  form-col'>
      <div className="form-group col-3">
      <label>Nombre</label>
        <input
          type="text"
          name='title'
          className="form-control"
          placeholder="Nombre del menu"
          value={this.state.menu.title}
          onChange={this.handleChange}/>
      </div> 
      <div className="form-group col-3">
      <label>Descripción</label>
        <input
          type="text"
          name='description'
          className="form-control"
          placeholder="menu description"
          value={this.state.menu.description}
          onChange={this.handleChange}/>
      </div>
      <div className="form-group col-3">
      <label>Archivo</label>
        <input type="file" className='form-control' id="customFile" name='attachment'
        onChange={this.handleChange}
        />
    
      </div>
      <div className="form-group col-3 d-flex align-items-center pb-0 mb-0 mt-3">
        <button type="submit" className="btn btn-primary w-100 ">Crear</button>
      
      </div>
    </form>
    </div>
    </div>
    );
  }
}