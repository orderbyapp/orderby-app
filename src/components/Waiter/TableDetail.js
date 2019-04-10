import React, { Component } from 'react';
import './TableItem.css'



class TableDetail extends Component {
// state = {
//   table : {}
// }
//   componentDidMount() {   
//     this.setState={
//       table : this.props.table
//     }
//   }


// {
//   createdAt: "2019-04-08T17:07:49.551Z"
// diners: 2
// id: "5cab7fe52f185f2ea8d45b80"
// orders: (27) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// position: 3
// restaurant: "5cab7f8e2f185f2ea8d45b7d"
// state: "free"
// tableNumber: 3
// updatedAt: "2019-04-08T17:07:49.551Z"
// }
  render() {
    const {table} = this.props.location.state;
    const order = table.orders.filter(order => order.kitchenStatus !== 'pending')[0]
    console.log(order)
    return (
      <div className='container mt-5'>
      <div id="accordion">
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
            <h5>{table.diners} Comensales</h5>
       
          <div className='add-product'>
            <div className='box-container'>
              <span><i  className="material-icons light-grey" data-name='less' >remove</i></span>
              <h3 className='count-adder'></h3>
              <span><i className="material-icons light-grey" data-name='more' >add</i></span>
         
          </div>
        </div>
          </div>
            <hr></hr>
            <h5>Estado de pedido: {order.kitchenStatus}</h5>
            <hr></hr>
            <h5><i className="fa fa-circle pink"></i> {table.state}</h5>
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
          {order.products.map(e =>{ return <h2 key={e.title}>{e.title}</h2>} )}
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
          {order.products.map(e =>{ if(e.instruction !== '') {return <h2 key={e.instruction}>{e.instruction}</h2>} })}

          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default TableDetail;