import React, { Component } from 'react';
import './TableItem.css'
import {Link} from 'react-router-dom'
import { tableService } from '../../services'

// pintamos las mesas para hacer luego link

class TableItem extends Component {
  render() {
    const {table} = this.props;
    return (
      <div>
        <Link to={{
          pathname: `/waiter/${table.id}`,
          state: {
            table: table
          } 
      }}>
        <div className="card mt-3 category-card-food">
          
        <div className='background-card'></div>
          <div className="card-body text-left pt-5 mt-5 body-category-info">
            <h4 className='pb-0 mb-0'>Mesa {table.tableNumber}</h4>
            <h4 className='pb-0 mb-0'>Comensales {table.diners}</h4>
            <p className="card-text">Position {table.position}</p>
            <p className="card-text">Estado {table.state}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  }
}

export default TableItem;