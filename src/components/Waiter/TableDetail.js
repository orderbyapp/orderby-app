import React, { Component } from 'react';
import './TableItem.css'
import { getTableByIdRest, updateWaiterTableRest, 
  updateOrderRest, updateRestaurant } from "../../services/RestaurantService";
import { Redirect } from 'react-router-dom';

class TableDetail extends Component {
  state = {
    restaurant: {},
    table : {},
    quantity : '',
    isBack : false,
  }

  componentDidMount = () => {
    getTableByIdRest(this.props.match.params.id)
      .then(response => {
        this.setState({ 
          restaurant: response.table,
          table: response,
          quantity: response.diners })
      }
    )
    // const newRest = {...this.state}
    // console.log("rest ", newRest)
    // updateRestaurant(newRest)
  }

  handleQuantity = (e) => {
    const action = e.target.dataset.name
    if(action === 'less' && this.state.quantity > 0){
      this.setState({
        quantity : this.state.quantity - 1,
      })
    } else if (action === 'more'){
      this.setState({
        quantity : this.state.quantity + 1,
      })
    }
  }
  onClickBack = () =>{
    const {table} = this.state
    if(this.state.quantity === 0 && table.orders.length === 0){
      this.setState({ isBack : true})
      const newTable = { 
        diners : this.state.quantity,
        state : "Libre",
      }
      updateWaiterTableRest(table.id, newTable)
    }
    else if(this.state.quantity > 0){
      const newTable = {
        state : "Ocupada",
        diners : this.state.quantity
      }
      updateWaiterTableRest(table.id, newTable)
    } else {
          const orderDelivered = { 
            kitchenStatus : "delivered"
          }
          const order = table.orders.length > 0 && 
          table.orders.filter(order => order.kitchenStatus === 'pending')[0]

          order && updateOrderRest(order.id, orderDelivered)
          const newTable = {
            state : "Libre",
            diners : this.state.quantity
          }
          updateWaiterTableRest(this.state.table.id, newTable)
      }
    this.setState({ isBack : true})
    // const newRest = {...this.state}
    // console.log("rest ", newRest)
    // updateRestaurant(newRest)
  }


  render() {
    // console.log("detail ", this.state)
    if(this.state.isBack){
      return <Redirect to='/waiter'/>
    }
    if(this.state.table){
      const table = this.state.table;
      const order = table.orders && 
        table.orders.filter(order => order.kitchenStatus === 'pending')[0]
    return (
        <div className='container mt-5'>
        <div id="accordion">
        {this.props.history.location.pathname !== "/waiter" ?  
          <div onClick={this.onClickBack} className='d-flex'><span className="material-icons black" >arrow_back</span></div> :
          <div><span className="material-icons black" >arrow_back</span></div>} 
        <h5>MESA {table.tableNumber} </h5>
        <div className="card">
          <div className="card-header d-flex" id="headingOne">
          <i className="material-icons pink">info</i> 

            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Información General
              </button>
            </h5>
          </div>
      
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
            <div className='comensales'>
              <h5>{this.state.quantity > 0 && this.state.quantity} Comensales</h5>
        
          <div className='add-product'>
          <div className='box-container'>
                <span><i  className="material-icons light-grey" data-name='less' onClick={this.handleQuantity}>remove</i></span>
                <h3 className='count-adder'>{this.state.quantity}</h3>
                <span><i className="material-icons light-grey" data-name='more' onClick={this.handleQuantity}>add</i></span>
              </div>
            </div>
            </div>
              <hr></hr>
              <h5>Estado de pedido: 
              {(order && order.kitchenStatus === "pending") && " En cocina"}
              {(order && order.kitchenStatus === "delivered") && " En mesa"}
              </h5>
              <hr></hr>
              { table.state === "free" && <h5><i className="fa fa-circle green"></i> Libre</h5>}
              { table.state === "occupied" && <h5><i className="fa fa-circle pink"></i> Ocupada</h5>}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
          <i className="material-icons pink">euro_symbol</i>

            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Cuenta actual
              </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
            { order && order.products.map(product =>{ 
              return <div className={`${(this.state.currentTarget === product.title) ? this.state.fadeOut : ''} list-object-order`} key={product.id}>
              <div className=" item-object-flex border-light">
                <div>
                  <div className=" white item-object-flex">
                    <div className="image-product-order-item">
                      <img
                        className="image-product-order-item"
                        alt={product.title}
                        src={product.image0}
                      />
                    </div>
                    <div className="quantity-product-order-item ml-3 black">
                      x <span className='black'>{product.quantity}</span>
                    </div>
                    <div className="quantity-product-order-item ml-3 black">
                      <span className="description-product-order black">
                        {product.title}
                      </span>
                    </div>
                  </div>
                </div>
                {this.props.editing && 
                <span className={`black ${'slide-in-blurred-right'} step-bg-2`}>
                  <i data-name={product.title} className="material-icons black font-17 close-editing-button" onClick={this.handleClickDelete}>close</i>
                 </span>}
                {!this.props.editing && <div className="price-object-order black ">{product.price * product.quantity}€</div>}              </div>
                <hr></hr>

            </div>})

          }


          
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Instructions
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div className="card-body">
            {order && order.products.map(e => { if(e.instruction !== '') {return <h2 key={e.instruction}>{e.instruction}</h2>} })}
            </div>
          </div>
        </div>
      </div>
      
      </div>
    );
  } else { 
    return null }
  }
}

export default TableDetail;