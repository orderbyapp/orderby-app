import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-100 card">
      <div className="w-100 delete-head-card"><i data-id={this.props.id} class="fas fa-times mr-2 f-1" onClick={this.props.deleteCard}></i></div>
        <img src={this.props.photo} className='image-card'></img>
        <p className='text-left pl-2'><strong>{this.props.title}</strong></p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}