
import React, {Component} from 'react';
import { Line, Doughnut, Pie } from 'react-chartjs-2';
import './Charts.css'
class  extends Component{

  render(){
    return (
      <div className="chart mb-4"     style={{
        width: "100%",
        height: "300px",
        maxHeight: '300px',
        padding: '25px',
        paddingTop: '20px',
        paddingBottom: '65px',
        background: 'white',
        borderRadius: '4px',
        boxShadow: '2px 2px 10px #DADADA',
      }}>
      
        <div className='flex-top-charts'>
        <div>
           <i class="far fa-calendar-alt calendar-chart"></i>
          <span>Valoración empleados</span> - <small>(Clientela)</small>
        </div>
        <div>
        <small className='purple'>  10:00 - 17:00</small>
        </div>
        

        </div>
        <hr></hr>

         <Line data={this.state.data} 
         options={this.state.options}/>

  
      </div>
    )
  }
}

export default ChartOne;