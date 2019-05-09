import React, { Component, Fragment } from 'react';
import { newProduct } from '../../services/MenuService';
import { Redirect, Link } from 'react-router-dom';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        title: '',
        description: '',
        price: 1,
        attachment: ''
      },
      onSubmit: false
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    newProduct({ ...this.state.product, ...this.props.location.state })
    .then(data => this.setState({
      onSubmit: true
    }),
      (error) => console.log(error.response.data)
    )
  }

  handleChange = (e) => {
    const {name} = e.target;

    if(e.target.files){
      this.setState({
        product : {
          ...this.state.product,
          [name]: e.target.value,
          attachment : e.target.files ? e.target.files[0] : e.target.value,
        }
      })
    } else {
      this.setState({
        product : {
          ...this.state.product,
          [name]: e.target.value,
        }
      })
    }
  }

  render() {
    if (this.state.onSubmit) {
      return (
      <Redirect to='/menus' />
      )} else {
    return (
      <Fragment>
        <div className='body-black'></div>
        <div className='absolute-form'>
        <form onSubmit={this.handleSubmit}>
        <div className='text-right'> <Link to='/menus'><i data-id={this.props.id} className="fas fa-times mr-2" onClick={this.props.deleteColumn}></i></Link></div>
        <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name='title'
          className="form-control"
          placeholder="Enter title"
          value={this.state.product.title}
          onChange={this.handleChange}/>
      </div> 
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name='description'
          className="form-control"
          placeholder="Enter description"
          value={this.state.product.description}
          onChange={this.handleChange}/>
      </div>
      <div className="form-group">
        <label>Precio</label>
        <input
          type="number"
          name='price'
          className="form-control"
          placeholder="Introduce precio"
          value={this.state.product.price}
          onChange={this.handleChange}/>
      </div>
      <div className="form-group">
      <label>Add image</label>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id="customFile" name='attachment'
        onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary w-100 mt-3 mb-4">Submit</button>
        {this.state.product.attachment && 
        
        <div className='image-div'>
           <img src={URL.createObjectURL(this.state.product.attachment)} className='image-form-product' alt='preview'></img>
        </div>
        
        }  
        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
      </div>
      </div>
    </form>
    </div>
    </Fragment>
    );
  }
}
}