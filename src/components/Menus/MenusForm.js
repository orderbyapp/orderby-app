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
      
    <form onSubmit={this.handleSubmit} className=' row  form-col'>
      <div className="form-group">
      <label>Nombre</label>
        <input
          type="text"
          name='title'
          className="form-control"
          placeholder="Nombre del menu"
          value={this.state.menu.title}
          onChange={this.handleChange}/>
      </div> 
      <div className="form-group">
      <label>Descripción</label>
        <input
          type="text"
          name='description'
          className="form-control"
          placeholder="menu description"
          value={this.state.menu.description}
          onChange={this.handleChange}/>
      </div>
      <div className="form-group">
      <label>Archivo</label>
        <input type="file" className='form-control' id="customFile" name='attachment'
        onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary w-100 mt-3 mb-4">Submit</button>
        {this.state.menu.attachment && 
        <div className='image-div'>
           <img src={URL.createObjectURL(this.state.menu.attachment)} alt='preview'></img>
        </div> 
        }  
      </div>
    </form>
    </div>
    );
  }
}