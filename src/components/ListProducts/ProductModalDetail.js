import React, { Component } from 'react';

class ProductModalDetail extends Component {
  state = {
    class : '',
    product : {...this.props}
  }

  closeModal = () => {
    console.log(this.state.product)
    this.setState({
      class : 'fade-out-bottom'
    }, () => setTimeout(() => {this.props.closeModal()}, 300))
  }

  render() {
    const product = this.state.product
    return (
      <div className={`modal-detail ${this.state.class}`}>
        <div className='div-image-detail' style={{backgroundImage: `url(${product.image})`}}>
          <div className='bg-image-detail-color'>
            
          </div>
        </div>
        <div className="container" >
        <div className="">
          <button className='button-close-modal' onClick={this.closeModal}>
            <span class="material-icons white close-menu-content">clear</span>
          </button>       
          <h1>{product.price}</h1>
          <p>{product.title}</p>
          <p>Licenses are valid for one year from the date of purchase.
             When asking for support with any purchased plugin, you 
             may be asked to provide a valid license key as proof of purchase.</p>
        </div>
        </div>
      </div>
    );
  }
}

export default ProductModalDetail;