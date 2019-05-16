import React, { Component } from 'react'
import '../Menuanimated'
import '../Menu.css'
import MenuManagmnet from  '../Menu'
import $ from 'jquery'; 
import './MetricsDashboard.css'
import dateFns from "date-fns";
import St1 from '../StatisticOne'
// or less ideally
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Income from './Income'
import IncomePolar from './IncomePolar'
import Donut from './IncomeDonut'
import IncomeUsers from './IncomeSumary'
import Products from './IncomeProducts'
import ProductList from './Products'
import ProductSumary from './ProductsSumary'
import ChartsUsers from './IncomeUsers'
import RatingWaiters from './Ratingwaiters'
import Tabs from 'react-bootstrap/Tabs'
import StaffSummary from './StaffSumary'
import OtherIncome from './OtherIncome'
import OtherReservations from './OtherIncomeReservations'
import OtherPayments from './OtherIncomePayments'

class MetricsDashboard  extends Component {

  renderIncome = () => {
    return (
      
        <div className='row'>
          <div className='col-12'>
            <Income></Income>
          </div>
          <div className='col-xl-6 col-md-6 col-12'>
             <Donut></Donut>
          </div>
          <div className='col-xl-6 col-md-6 col-12'>
            <IncomeUsers></IncomeUsers>
          </div>
        </div>
      
    )
  }

  renderProducts = () => {
    return (
      
        <div className='row'>
          <div className='col-12'>
            <Products></Products>
          </div>
          <div className='col-xl-6 col-md-6 col-12'>
             <ProductList></ProductList>
          </div>
          <div className='col-xl-6 col-md-6 col-12'>
            <ProductSumary></ProductSumary>
          </div>
        </div>
      
    )
  }

  renderStaff = () => {
    return (
      
        <div className='row mt-4'>
          <div className='col-12'>
            <ChartsUsers></ChartsUsers>
          </div>
          <div className='col-xl-6 col-md-6 col-12'>
             <RatingWaiters></RatingWaiters>
          </div>
          <div className='col-xl-6 col-md-6 col-12'>
            <StaffSummary></StaffSummary>
          </div>
        </div>
      
    )
  }


  renderOther = () => {
    return (
      
        <div className='row mt-4'>
          <div className='col-xl-4 col-md-6 col-12'>
            <OtherIncome></OtherIncome>
          </div>
          <div className='col-xl-4 col-md-6 col-12'>
             <OtherReservations></OtherReservations>
          </div>
          <div className='col-xl-4 col-md-6 col-12'>
             <OtherPayments></OtherPayments>
          </div>
        </div>
      
    )
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
          <div className='bg-white p-4 ml-4 mr-4 mb-4 bx-sw charts-container '>
            <Tabs defaultActiveKey="Ingresos" id="uncontrolled-tab-example">
            <Tab eventKey="Ingresos" title="Ingresos">
                {this.renderIncome()}
              </Tab>
              <Tab eventKey="Productos" title="Productos">
                {this.renderProducts()}
              </Tab>
              <Tab eventKey="Staff" title="Staff" >
                {this.renderStaff()}
              </Tab>
              <Tab eventKey="other" title="other" >
                {this.renderOther()}
              </Tab>
            </Tabs>
          </div>
        </main>
      </div>
      
    </div>
    </div>
    )
  }
}

export default MetricsDashboard