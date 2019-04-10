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



  render() {
    const {table} = this.props.location.state;
    const order = table.orders.filter(order => order.kitchenStatus !== 'pending')[0]
    console.log(order)
    return (
      <div>
       
        <div className="card mt-3 category-card-food">
          
        <div className='background-card'></div>
          <div className="card-body text-left body-category-info">
        
            <h4 className='pb-0 mb-0'>Mesa {table.tableNumber}</h4>
            <h4 className='pb-0 mb-0'>Comensales {table.diners}</h4>
            <p className="card-text">Position {table.position}</p>
            <p>{order.bill}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TableDetail;