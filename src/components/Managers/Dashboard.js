import React, { Component } from 'react'
import './Login.css'
import './Menuanimated'
import './Menu.css'
import MenuManagmnet from  './Menu'
import svgBottom from '../../sources/pink-top-management.svg'
import './MainManagement.css'
import StatisticsOne from './StatisticOne'
import StatisticTwo from './ChartTwo'

class IntroCards  extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[
          {
            label:'Population',
            data:[
              617594,
              181045,
              153060,
              106519,
              105162,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }
  
  render() {
    return (
      <div>
      <div >
       {/* <div className=' white-paragraph-bg'>
       <p className='pt-3'> Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
       </div> */}
    <div className="row">
    <div className="col-xl-3 col-md-6 col-12 mb-3">
      <div className="card-counter ">
      <i className="fa fa-database "></i>
        <span className="count-numbers purple">12</span>
        <span className="count-name">Caja</span>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 col-12 mb-3">
      <div className="card-counter">
      <i className="fa fa-users"></i>
        <span className="count-numbers orange">599</span>
        <span className="count-name">Clientes</span>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 col-12 mb-3">
      <div className="card-counter">
      <i class="fas fa-hourglass-end"></i>
        <span className="count-numbers yellow">6875</span>
        <span className="count-name">Promedio</span>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 col-12 mb-3">
      <div className="card-counter">
      <i class="far fa-star"></i>
        <span className="count-numbers pink">35</span>
        <span className="count-name">Valoración</span>
      </div>
    </div>

  <div></div>
  </div>
 
      
  </div>

  <div className='row'>
    <div className='bg-statistic-linear col-xl-6 col-lg-12 col-md-12 col-12'>
      <StatisticsOne></StatisticsOne>
    </div>
    <div className='bg-statistic-linear col-xl-6 col-lg-12 col-md-12 col-12'>
     <StatisticTwo></StatisticTwo>
    </div>
  </div>
</div>

      
    )
  }
}

export default IntroCards