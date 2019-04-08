import React, { Component } from 'react';
import './TableItem.css'
import {Link} from 'react-router-dom'
import { tableService } from '../../services'

// pintamos las mesas para hacer luego link

class TableItem extends Component {
  render() {
    const {table} = this.props;
    return (
      <div className='col-xl-6 col-lg-6 col-md-6 col-12 center-table'>
        <Link to={{
          pathname: `/waiter/${table.id}`,
          state: {
            table: table
          } 
      }}>
       <div className='asientos-top d-flex'>
       <div className='asiento asiento-1'></div>
       <div className='asiento asiento-2'></div>
        </div>
        <div className='mesa'>
          <div>{table.id}</div>
          <div>{table.title}</div>
       </div>
        <div className='asientos-bottom d-flex mb-5'>
       <div className='asiento asiento-1'></div>
       <div className='asiento asiento-2'></div>
        </div>
        </Link>
      </div>
    );
  }
}

export default TableItem;