import React, { Component } from 'react'
import { authService } from '../services/index'

const AuthContext = React.createContext();

class AuthStore extends Component {
  state = {
    user: {}
  }

  userChangeSubscription = {}

  componentDidMount() {
    this.userChangeSubscription = authService.onUserChange()
      .subscribe(user => this.state({ user: user }))
  }

  componentWillMount() {
    this.userChangeSubscription.unsubscribe()
  }

  handleUserChange = (user) => {
    this.setState({ user: user })
  }

  isAuthenticated = () => this.state.user.username;

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