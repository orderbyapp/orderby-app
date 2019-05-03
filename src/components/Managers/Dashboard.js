import React, { Component } from 'react'
import './Login.css'
import './Menuanimated'
import './Menu.css'
import MenuManagmnet from  './Menu'
import svgBottom from '../../sources/pink-top-management.svg'
import './MainManagement.css'
import StatisticsOne from './StatisticOne'

class IntroCards  extends Component {
  state = {
   
  }
  render() {
 
    return (
      <div>
     
      <div >
    <h1 className='bold dark-grey'>Welcome restaurant</h1>
       <div className='little-bar'></div>
       <div className=' white-paragraph-bg'>
       <p className='pt-3'> Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
       </div>
    <div className="row white-icons-board">
    <div className="col-md-3">
      <div className="card-counter primary">
        <i className="fa fa-code-fork"></i>
        <span className="count-numbers">12</span>
        <span className="count-name">Flowz</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter danger">
        <i className="fa fa-ticket"></i>
        <span className="count-numbers">599</span>
        <span className="count-name">Instances</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter success">
        <i className="fa fa-database"></i>
        <span className="count-numbers">6875</span>
        <span className="count-name">Data</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter info">
        <i className="fa fa-users"></i>
        <span className="count-numbers">35</span>
        <span className="count-name">Users</span>
      </div>
    </div>
    <div className='row p-3 '>

  </div>
  <div></div>
  </div>
 
      
  </div>
  <div className='bg-statistic-linear col-6'>
    <StatisticsOne></StatisticsOne>
  
      </div>
      
</div>

      
    )
  }
}

export default IntroCards