import React, { Component } from 'react';

class ProductModalDetail extends Component {
  render() {
    return (
      <div className='modal-detail'>
        <div className="container" >
        <div className="">
        <button onClick={this.props.closeModal}>cerrar</button>       
          <h1>{this.props.price}</h1>
          <p>LICENSING</p>
          <p>Licenses are valid for one year from the date of purchase. When asking for support with any purchased plugin, you may be asked to provide a valid license key as proof of purchase.</p>
        </div>
        </div>
      </div>
    );
  }
}

export default ProductModalDetail;