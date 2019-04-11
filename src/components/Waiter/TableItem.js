import React, { Component } from 'react';
import './TableItem.css'
import {Link} from 'react-router-dom'
//import { tableService } from '../../services'
import  Seat  from '../../sources/asiento-orderby.svg'

class TableItem extends Component {
  // state = {
  //   table: {}
  //  }
  //  tableSubscription = undefined

  // componentDidMount() {   
  //   this.tableSubscription = tableService.onTableChange().subscribe(
  //     table => this.setState({ 
  //       table: table
  //     })
  //   )
  // }

  // componentWillUnmount() {   
  //   this.tableSubscription.unsubscribe();
  // }

  render() {
    const {table} = this.props;
    console.log("orders ", table.orders)
    return (
      <div className='col-xl-6 col-lg-6 col-md-6 col-xs-12 center-table'>
        <Link to={{
          pathname: `/waiter/${table.id}`,
          state: {
            table: table
          } 
      }}>
       <div className='asientos-top d-flex'>
       <div className='asiento asiento-1'>
         <img src={Seat}></img>
       </div>
       <div className='asiento asiento-2'>
        <img src={Seat}></img>
       </div>
        </div>

        <div className='mesa'>
        <div className='status-sideBar'></div>
          <div className='ml-4 pt-2 info-table-top'>
          <i className="material-icons font-size-17">supervisor_account</i>{table.diners}
          <div className='add-costumer-card'><div className='button-more-promotions'><span className="more-icon-promotions ">+</span></div></div>
          <h2 className='numbertable'>{table.tableNumber}</h2>
          </div>
          <div>{table.title}</div>
          <div className='table-info-inside ml-4'>
            <h6 className='t-d-none dark-blue mt-0 mb-0 pt-0'>Estado: 
            <i>{table.orders && table.orders.kitchenStatus}</i></h6>
            <p className='t-d-none dark-blue mt-0 pt-0'>{table.state}</p>
            <span className='light-grey mt-0 pt-0'>14:06</span>
          </div>
       </div>
      
        <div className='asientos-bottom d-flex mb-5'>
        <div className='asiento asiento-1-down'>
          <img src={Seat}></img>
        </div>
        <div className='asiento asiento-2-down'>
        <img src={Seat}></img>
        </div>
        </div>
        </Link>
      </div>
     
    );
  }
}

export default TableItem;