import React, { Component } from 'react';
import Button from '../Utilities/Button';

class OrderButtons extends Component {
  editMenu = () => {
    this.props.onClickEdit()
  }

  render() {
    return (
      <div className='absolute-buttons-order'>
      {this.props.editing &&  <Button color='btn btn-linear-white-bg-trans ' text='Dejar de editar' width='w-100' onClick={this.editMenu}></Button>
}
    {!this.props.editing &&  <Button color='btn btn-linear-white-bg-trans' text='Editar pedido' width='w-100' onClick={this.editMenu}></Button>
}
        <div className="strike mt-2">
            <span className='white'>o</span>
        </div>
        <Button color='btn btn-pink-color-white' text='Pagar por la app' width='w-100'></Button>
      </div>
    );
  }
}

export default OrderButtons;