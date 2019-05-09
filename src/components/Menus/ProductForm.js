import React, { Component } from 'react';
import { newProduct } from '../../services/MenuService';
import { Redirect, Link } from 'react-router-dom';
import '../Managers/Menuanimated';
import '../Managers/Menu.css';
import MenuManagmnet from '../Managers/Menu';
import $ from 'jquery';
import Oval1 from '../../sources/oval-dashboard-1.svg';
import Oval2 from '../../sources/oval-dashboard-2.svg';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        title: '',
        description: '',
        price: 1,
        attachment: '',
      },
      onSubmit: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    newProduct({ ...this.state.product, ...this.props.location.state }).then(
      data =>
        this.setState({
          onSubmit: true,
        }),
      error => console.log(error.response.data)
    );
  };

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
          [e.target.name]: e.target.value
        }
      })
    }
  }

  openMenu = () => {
    $('.page-wrapper').addClass('toggled');
  };

  render() {
    if (this.state.onSubmit) {
      return <Redirect to='/manager/menus' />;
    } else {
      return (
        <React.Fragment>
          {/* <div className='background-div-color page-content-management'>
            <img src={Oval1} className='oval1-dashboard opacity-50' />
            <img src={Oval2} className='oval2-dashboard opacity-50' />

            <div className='page-wrapper chiller-theme toggled'>
              <a
                id='show-sidebar'
                className='btn btn-sm btn-dark'
                onClick={this.openMenu}
              >
                <i className='fas fa-bars white' />
              </a>
              <MenuManagmnet />
              <main className='page-content background-div-color'> */}
                <div className='body-black' />
                <div className='absolute-form'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='text-right'>
                      {' '}
                      <Link to='/menus'>
                        <i
                          data-id={this.props.id}
                          className='fas fa-times mr-2'
                          onClick={this.props.deleteColumn}
                        />
                      </Link>
                    </div>
                    <div className='form-group'>
                      <label>Title</label>
                      <input
                        type='text'
                        name='title'
                        className='form-control'
                        placeholder='Enter title'
                        value={this.state.product.title}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Description</label>
                      <input
                        type='text'
                        name='description'
                        className='form-control'
                        placeholder='Enter description'
                        value={this.state.product.description}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Precio</label>
                      <input
                        type='number'
                        name='price'
                        className='form-control'
                        placeholder='Introduce precio'
                        value={this.state.product.price}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Add image</label>
                      <div className='custom-file'>
                        <input
                          type='file'
                          className='custom-file-input'
                          id='customFile'
                          name='attachment'
                          onChange={this.handleChange}
                        />
                        <button
                          type='submit'
                          className='btn btn-primary w-100 mt-3 mb-4'
                        >
                          Submit
                        </button>
                        {this.state.product.attachment && (
                          <div className='image-div'>
                            <img
                              src={URL.createObjectURL(
                                this.state.product.attachment
                              )}
                              className='image-form-product'
                              alt='preview'
                            />
                          </div>
                        )}
                        <label
                          className='custom-file-label'
                          htmlFor='customFile'
                        >
                          Choose file
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              {/* </main>
            </div>
          </div> */}
        </React.Fragment>
      );
    }
  }
}
