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



import Tabs from 'react-bootstrap/Tabs'
import TabContainer from 'react-bootstrap/TabContainer'


class MetricsDashboard  extends Component {
  
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
          <div className=''>

         
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Home">
                awdasfafsf
              </Tab>
              <Tab eventKey="profile" title="Profile">
                awdasfafsf
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                awdasfafsf
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