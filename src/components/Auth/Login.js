import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import authService from '../../services/AuthService'
import './Login.css'
import svgTop from '../../sources/yellow-waiters.svg'
import svgBottom from '../../sources/pink-waiters.svg'



//const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const validations = {
  username: (value) => {
    let message;
    if(!value) {
      message = 'El nombre de usuario es requerido'
    } 
    return message;
  },
  password: (value) => {
    let message;
    if(!value) {
      message = 'El password es requerido'
    }
    return message;
  }
}

class Login extends Component {
  state = {
    user: {
      username: '',
      password: ''
    },
    errors: {
      username: validations.username(),
      password: validations.password()
    },
    touch: {},
    isAuthenticated: false
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },
      errors: {
        ...this.state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  }

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.isValid()) {
      authService.authenticate(this.state.user)
        .then(
          (user) => this.setState({ isAuthenticated: true }),
          (error) => {
            const { message, errors } = error.response.data;
            this.setState({
              errors: {
                ...errors,
                password: !errors && message
              },
              touch: {
                ...errors,
                password: !errors && message
              }
            })
          }
        )
    }
  }

  isValid = () => {
    return !Object.keys(this.state.user)
      .some(attr => this.state.errors[attr])
  }

  render() {
    const { isAuthenticated, errors, user, touch } = this.state
    if(isAuthenticated) {
      return (<Redirect to="/waiter" />)
    }

    return (
    <div>
      <img className='waiters-top-yellow' src={svgTop}></img>
      <div className='absolute-text-top-waiters text-center'>
      </div>
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-8 center-form-login">
          <p className="">¡Hola de nuevo!</p>
          <form onSubmit={this.handleSubmit}>
            <div className="mt-100">
              <div className="">
                <label>Usuario</label>
              </div>
              <input type="text" 
              className={`form-control ${touch.username && errors.username && 'is-invalid'}`} 
              name="username" 
              placeholder="Introduce tu nombre de usuario" 
              onChange={this.handleChange} 
              value={user.username} 
              onBlur={this.handleBlur} />
              <div className="invalid-feedback">{errors.username}</div>
            </div>
            <div className="mt-3">
              <div className="">
                <label>Tu contraseña</label>
              </div>
              <input type="password" 
              className={`form-control ${touch.password && errors.password && 'is-invalid'}`} 
              name="password" 
              placeholder="Introduce tu contraseña" 
              onChange={this.handleChange} 
              value={user.password} 
              onBlur={this.handleBlur} />
              <div className="invalid-feedback">{errors.password}</div>
            </div>

            <div className="from-actions mt-5">
              <button type="submit" className="box-btn p-2 white" disabled={!this.isValid()}>Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <img className='waiters-top-pink' src={svgBottom}></img>

  </div>
    )
  }
}

export default Login