import React, { Component } from 'react';
import { newMenu } from '../../services/MenuService';

export default class ColumnForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: {
        title: '',
        description: '',
        photo: ''
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    newMenu({ ...this.state.column })
    .then(data => 
      this.props.refresh()
    )
  }

  handleChange = (e) => {
    this.setState({
      column : {
        ...this.state.column,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
      
    <form onSubmit={this.handleSubmit} className=' row  form-col'>
    <h5 className='text-white p-0 m-0 d-none d-lg-block d-md-block'><strong>New</strong> Menu</h5>
      <div className=" col-xl-2 col-md-3 col-5 w-100">
        <input
          type="text"
          name='title'
          className="form-control"
          placeholder="Nombre del menu"
          value={this.state.menu.title}
          onChange={this.handleChange}/>
      </div> 
      <div className=" col-xl-2 col-md-3 col-5 pl-0">
        <input
          type="text"
          name='description'
          className="form-control "
          placeholder="menu description"
          value={this.state.menu.description}
          onChange={this.handleChange}/>
      </div>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFile" name='photo'
        onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary w-100 mt-3 mb-4">Submit</button>
        {this.state.menu.photo && 
        
        <div className='image-div'>
           <img src={URL.createObjectURL(this.state.menu.photo)} className='image-form-product' alt='preview'></img>
        </div>
        
        
        }  
        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
      </div>
      <button type="submit" className="btn btn-primary "> <i data-id={this.props.id} className="fas fa-plus" onClick={this.props.deleteColumn}></i></button>
    </form>
    </div>
    );
  }
}