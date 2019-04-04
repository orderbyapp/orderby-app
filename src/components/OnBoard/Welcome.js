import React, { Component } from 'react'
import { getTableById } from '../../services/TableService'
import Intro from '../Intro/Intro';

export default class Welcome extends Component {
  state = {
    table : {}
  }

  componentDidMount = () => {
    getTableById(this.props.match.params.id)
      .then(response => {this.setState({ table: response })},
      err => {if(err){  
        this.setState({
          error: true
        })
      }}
    )
  }

  render = ()=> {
    return(
      <Intro></Intro> 
    )
  }
}




