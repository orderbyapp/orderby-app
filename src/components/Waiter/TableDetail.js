import React, { Component } from 'react';
import './TableItem.css'

// esta será para el detalle de la mesa con su order y tal

class TableDetail extends Component {
  

  render() {
    const {table} = this.props.location.state;
    return (
      <div>
       
        <div className="card mt-3 category-card-food">
          
        <div className='background-card'></div>
          <div className="card-body text-left body-category-info">
        
            <h4 className='pb-0 mb-0'>Mesa {table.tableNumber}</h4>
            <h4 className='pb-0 mb-0'>Comensales {table.diners}</h4>
            <p className="card-text">Position {table.position}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TableDetail;