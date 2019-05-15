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
    selectedDate: new Date()
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
            {formattedDate == 2 && <span className='reserva'>Juan x 2</span>} 
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
          </div>
         

        </main>
      </div>
      
    </div>
    </div>
    )
  }
}

export default Calendar