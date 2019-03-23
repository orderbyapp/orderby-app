import React, { Component } from 'react';
import './Button.css'


class Button extends Component {
  state = {
    color: this.props.color || '',
    border: this.props.border || '',
    borderColor: this.props.borderColor || '',
    width: this.props.width || '',
    text: this.props.text || ''
  }

  
  render() {
    console.log(this.state.color)
    return (
      <div>
        <button className={
          `${this.state.color} ${this.state.border} ${this.state.width} ${this.state.borderColor}`
          }>{this.state.text}</button>
      </div>
    );
  }
}

export default Button;