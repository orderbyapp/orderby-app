import React, { Component } from 'react';
import './ActionButton.css'
import Plus from '../../sources/vectorpaint.svg'

class ActionsButton extends Component {
  render() {
    return (
      <div className='container-button-more'>
        <button class="pure-material-button-contained" onClick={this.props.activeMenuBoard}><img className='more-icon-actionbutton' alt='more' src={Plus}/></button>
      </div>
    );
  }
}

export default ActionsButton;