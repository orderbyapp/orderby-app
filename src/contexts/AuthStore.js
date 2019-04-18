import React, { Component } from 'react'
import { authService } from '../services/index'

const AuthContext = React.createContext();
const CURRENT_USER_KEY = 'current-user';

class AuthStore extends Component {
  state = {
    user: JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || '{}')
  }

  userChangeSubscription = {}

  componentDidMount() {
    this.userChangeSubscription = authService.onUserChange()
      .subscribe(user => this.setState({ user: user }, () => console.log(this.state)))
  }

  componentWillUnmount() {
    this.userChangeSubscription.unsubscribe()
  }

  handleUserChange = (user) => {
    this.setState({ user: user })
  }

  isAuthenticated = () => {
    return this.state.user && this.state.user.username;
  }

  render(){
    return(
      <AuthContext.Provider value={{
        user: this.state.user,
        isAuthenticated: this.isAuthenticated
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
 
const withAuthConsumer = (Component) => {
  return (props) => (
    <AuthContext.Consumer>
      {(storeProps) => <Component {...props} {...storeProps} />}
    </AuthContext.Consumer>
  )
}

export { AuthContext, AuthStore, withAuthConsumer }