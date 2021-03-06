import React, { Component } from 'react'
import './TableItem.css'
import { Link } from 'react-router-dom'
import Seat from '../../sources/asiento-orderby.svg'
import occupiedTable from '../../sources/occupied-table.svg'
import freeTable from '../../sources/free-table.svg'
import occupiedSeat from '../../sources/asiento-orderby-ocupado.svg'
import reservedSeat from '../../sources/asiento-reservado.svg'
import Reservation from '../../sources/reservation-svg.svg'

import Moment from 'moment'

class TableItem extends Component {
  render() {
    const { table } = this.props;
    const order =
      table.orders &&
      table.orders.filter(order => order.kitchenStatus === 'pending')[0];

    return (
      <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 center-table">
        <Link
          to={{
            pathname: `/waiter/${table.id}`,
            state: {
              table: table
            }
          }}
        >
          {this.props.status === 'Ocupada' && (
            <div>
              <div className='asientos-top d-flex'>
                <div className='asiento asiento-1'>
                  {table.diners >= 1 && <img src={occupiedSeat} />}
                  {table.diners < 1 && <img src={Seat} />}
                </div>
                <div className='asiento asiento-2'>
                  {table.diners >= 2 && <img src={occupiedSeat} />}
                  {table.diners < 2 && <img src={Seat} />}
                </div>
              </div>
              <div className='mesa-ocupada'>
                <div className='status-sideBar' />
                <div className='ml-4 pt-2 info-table-top'>
                  <img className='icon-table-status' src={occupiedTable} />
                  <span className='black ml-2'>{table.diners}</span>
                  <div className='add-costumer-card'>
                    <div className='button-more-promotions'>
                      <span className='more-icon-promotions '>+</span>
                    </div>
                  </div>
                  <h2 className='numbertable pink'>{table.tableNumber}</h2>
                </div>
                <div>{table.title}</div>
                <div className='table-info-inside ml-4'>
                  <h6 className='t-d-none dark-blue mt-0 mb-0 pt-0'>
                    Estado:
                    <i>{table.orders && table.orders.kitchenStatus}</i>
                  </h6>
                  <p className="t-d-none dark-blue mt-0 pt-0">{table.state}</p>
                  <span className="light-grey mt-0 pt-0">
                    {order && Moment(order.updateAt).format('HH:mm')}
                  </span>
                </div>
              </div>
              <div className="asientos-bottom d-flex mb-5">
                <div className="asiento asiento-1-down">
                  {table.diners >= 3 && <img src={occupiedSeat} />}
                  {table.diners < 3 && <img src={Seat} />}
                </div>
                <div className="asiento asiento-2-down">
                  {table.diners >= 4 && <img src={occupiedSeat} />}
                  {table.diners < 4 && <img src={Seat} />}
                </div>
              </div>
            </div>
          )}
          {this.props.status === 'Libre' && (
            <div>
              <div className="asientos-top d-flex">
                <div className="asiento asiento-1">
                  <img src={Seat} />
                </div>
                <div className="asiento asiento-2">
                  <img src={Seat} />
                </div>
              </div>
              <div className="mesa-libre">
                <div className="ml-4 pt-2 info-table-top">
                  <img className="icon-table-status" src={freeTable} />
                  <h2 className="numbertable">{table.tableNumber}</h2>
                </div>
                <div>{table.title}</div>
                <div className="table-info-inside ml-4">
                  <h6 className="t-d-none dark-blue mt-0 mb-0 pt-0">
                    Estado:
                    <i>{table.orders && table.orders.kitchenStatus}</i>
                  </h6>
                  <p className="t-d-none dark-blue mt-0 pt-0">{table.state}</p>
                </div>
              </div>
              <div className="asientos-bottom d-flex mb-5">
                <div className="asiento asiento-1-down">
                  <img src={Seat} />
                </div>
                <div className="asiento asiento-2-down">
                  <img src={Seat} />
                </div>
              </div>
            </div>
          )}
                    {this.props.status === 'Reservada' && (
            <div>
              <div className="asientos-top d-flex">
                <div className="asiento asiento-1">
                  <img src={reservedSeat} />
                </div>
                <div className="asiento asiento-2">
                  <img src={reservedSeat} />
                </div>
              </div>
              <div className="mesa-reservada">
                <div className="ml-4 pt-3 info-table-top">
                  <img className="icon-table-status" src={Reservation} />
                  <h2 className="numbertable text-white">{table.tableNumber}</h2>
                </div>
                <div>{table.title}</div>
                <div className="table-info-inside ml-4">
                  <h6 className="t-d-none text-white mt-0 mb-0 pt-0">
                    Estado:
                    <i>{table.orders && table.orders.kitchenStatus}</i>
                  </h6>
                  <p className="t-d-none text-white mt-0 pt-0">{table.state}</p>
                </div>
              </div>
              <div className="asientos-bottom d-flex mb-5">
                <div className="asiento asiento-1-down">
                  <img src={reservedSeat} />
                </div>
                <div className="asiento asiento-2-down">
                  <img src={Seat} />
                </div>
              </div>
            </div>
          )}
        </Link>
      </div>
    );
  }
}

export default TableItem;
