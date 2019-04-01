import React, { Component, Fragment } from 'react';

class ProductItem extends Component {
  state = {
    imageUrl : this.props.image0 || 'https://cdn-3.expansion.mx/dims4/default/4738f15/2147483647/strip/true/crop/650x434+0+0/resize/800x534!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fc3%2F79%2Fcbe0f67f402085f477e72529205d%2Fth-031116-jacinta-020.jpeg'
  }

  modalOn = () => {
    this.props.modalOn({...this.props})
  }
  render() {

    return (
      <Fragment>
      <div >
        <div className="" onClick={this.modalOn}>
            <div className="row no-gutters" key={this.props.id}>
                <div className="image-item-list" style={{backgroundImage: `url(${this.state.imageUrl})`}}>
                </div>
                <div className="col ">
                    <div className="card-block px-2 info-promotion-text-div">
                      <h5 className="card-title card-promotion-title">{this.props.title}</h5>
                      <div className='info-promotion'>
                        <div className="">
                          <span className='black'>{this.props.price}</span> <span className='black'>€</span>
                        </div>
                        <div className="">
                        {this.props.extraInfo && 
                        <Fragment>
                          <span className='grey'>
                          </span>
                          <span className='grey'>€</span>
                          </Fragment>
                        }
                        </div>
                      </div>
                      { this.props.ordered && 
                         <div className='add-promotion-card-selected' >
                          <div className='button-more-promotions'>
                            <span className="more-icon-promotions" >+</span>
                          </div>
                        </div>}
                        { !this.props.ordered &&    
                        <div className='add-promotion-card' >
                          <div className='button-more-promotions'>
                            <span className="more-icon-promotions" >+</span>
                          </div>
                        </div>}
                      </div>
                    </div>
                </div>
            </div>
      </div>
      <hr className='p-0 mt-3 mb-3 border-grew-hr'></hr>
      </Fragment>
    );
  }
}

export default ProductItem;