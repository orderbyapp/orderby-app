import React, { Component } from 'react'
import '../Menuanimated'
import '../Menu.css'
import MenuManagmnet from  '../Menu'
import $ from 'jquery'; 
import './Calendar.css'
import dateFns from "date-fns";


class Calendar  extends Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    currentDate: 17
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row-calendar flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
      
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
    
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row-calendar">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
            }`}
           
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            {formattedDate == 15 && <div className='reserva'>Juan x 2 / 14:00</div>} 
            {formattedDate == 18 && <div className='reserva'>Carlos x 4 / 16:00</div>} 
            {formattedDate == 21 && <div> <div className='reserva'>Roberto x 2 / 22:30</div> <div className='reserva2'>JoseMa x 6 / 22:00</div></div>} 
            {formattedDate == 20 && <div className='reserva'>Moisés x 4 / 22:40</div>} 
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row-calendar" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  openMenu = () => {
    $(".page-wrapper").addClass("toggled");
  }

  render() {
 
    return (
      <div>
        <div className='background-div-color page-content-management background-div-color'>
          <div className="page-wrapper chiller-theme toggled">
            <a id="show-sidebar" className="btn btn-sm btn-dark" onClick={this.openMenu}>
              <i className="fas fa-bars white"></i>
            </a>
            <MenuManagmnet></MenuManagmnet>
            <main className="page-content ">
              <div id="contentid" class="container-fluid bg-transparent">      
              </div>
              <div className='p-4'>
                <div className="calendar">
                  {this.renderHeader()}
                  {this.renderDays()}
                  {this.renderCells()}
                </div>
                <div>
                 
                <button type="button" class="btn btn-primary btn-custom-calendar" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                <i class="far fa-plus-square text-white pr-3"></i>   Añadir Reserva</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content border-none bx-sw">
      <div class="modal-header bg-purple text-white">
        <h5 class="modal-title" id="exampleModalLabel"> 
      <i class="far fa-calendar text-white pr-3"></i>
Nueva Reserva - Mayo</h5>
        <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label"><i class="far fa-edit purple pr-2"></i> Nombre de la reserva:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div  className='row'>
          <div class="form-group col-xl-6 col-md-6">
            <label for="recipient-name" class="col-form-label">
            <i class="far fa-clock purple pr-3"></i>
            Hora:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="form-group col-xl-6 col-md-6">
            <label for="recipient-name" class="col-form-label">
            <i class="fa fa-users purple pr-3"></i>
            Comensales:</label>
            <input type="number" class="form-control" id="recipient-name"></input>
          </div>

          </div>
         
          
          <div class="form-group">

    <div id="calendar-container">
      <h1 id="calendar-title">
       
        <span>Mayo, 2019</span>
      
      </h1>
      <table id="calendar-table">
        <tr>
          <th>Lun</th>
          <th>Mar</th>
          <th>Mie</th>
          <th>Jue</th>
          <th>Vie</th>
          <th>Sab</th>
          <th>Dom</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          
        </tr>
        <tr>
        <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          
        </tr>
        <tr>
        <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td>19</td>
       
        </tr>
        <tr>
        <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td>26</td>
          
        </tr>
        <tr>
        <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td>31</td>
          <td></td>
          <td></td>
         
        </tr>
        
      </table>
    </div>

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-pink" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-outline-info">Confirmar</button>

      </div>
    </div>
  </div>
</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar