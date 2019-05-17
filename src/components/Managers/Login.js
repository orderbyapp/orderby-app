import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import authService from '../../services/AuthService'
import './Login.css'
import svgBottom from '../../sources/pink-top-management-svg.svg'

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
  },
  role: (value) => {
    let message;
    if(!value) {
      message = 'El role no es correcto'
    }
    return message;
  }
}

class LoginManager extends Component {
  state = {
    user: {
      username: '',
      password: ''
    },
    errors: {
      username: validations.username(),
      password: validations.password(),
      role: validations.role()
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
          (user) => { user.role === 'admin' ?
            this.setState({ isAuthenticated: true }) : this.setState({
              errors: {
                password: 'Tu role no está autorizado'
              } })},
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
      return (<Redirect to="/management" />)
    }

    return (
    <div class=''>
      <img className='manager-top-yellow' src={svgBottom}></img>
      <div className='absolute-text-top-waiters text-center'>
      </div>
      <div className="container ">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-8 center-form-login custom-size-form">
          <h3 className="">Welcome to <br></br>OrderBy - Managers</h3>
          <form onSubmit={this.handleSubmit} className='mt-4'>
            <div className="mt-100">
              <div className="">
                <label className=''>Usuario</label>
              </div>
              <input type="text" 
              className={`form-control  ${touch.username && errors.username && 'is-invalid '}`} 
              name="username" 
              placeholder="Introduce tu nombre de usuario" 
              onChange={this.handleChange} 
              value={user.username} 
              onBlur={this.handleBlur} />
              <div className="invalid-feedback">{errors.username}</div>
            </div>
            <div className="mt-3">
              <div className="">
                <label className=''>Tu contraseña</label>
              </div>
              <input type="password" 
              className={`form-control  ${touch.password && errors.password && 'is-invalid '}`} 
              name="password" 
              placeholder="Introduce tu contraseña" 
              onChange={this.handleChange} 
              value={user.password} 
              onBlur={this.handleBlur} />
              <div className="invalid-feedback">{errors.password}</div>
            </div>

            <div className="from-actions mt-5">
              <button type="submit" className="box-btn-manager p-2  white" disabled={!this.isValid()}>Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <img className='manager-bottom-purple' src={svgBottom}></img>

  </div>
    )
  }
}

export default LoginManager