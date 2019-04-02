import React, { Component } from 'react';
import Button from '../Utilities/Button';
import {Link} from 'react-router-dom'

class OrderButtons extends Component {
  editMenu = () => {
    this.props.onClickEdit()
  }
  payOrder = () => {
    this.props.visibilityMenuCard()
  }

  render() {
    return (
      <div className='absolute-buttons-order'>
      {this.props.editing &&  <Button color='btn btn-linear-white-bg-trans ' text='Dejar de editar' width='w-100' onClick={this.editMenu}/>
}
    {!this.props.editing &&  <Button color='btn btn-linear-white-bg-trans' text='Editar pedido' width='w-100' onClick={this.editMenu}/>
}
        <div className="strike mt-2">
            <span className='white'>o</span>
        </div>
        <Link className='btn btn-pink-color-white w-100' to='/payment' onClick={this.payOrder}>Pagar por la app</Link>
      </div>
    );
  }
}

export default OrderButtons;