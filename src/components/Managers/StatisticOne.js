
import React, {Component} from 'react';
import { Line, Doughnut, Pie } from 'react-chartjs-2';
import './Charts.css'
class ChartOne extends Component{
constructor(props){
 super(props)

 this.state = {
  data :  {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
  datasets: [
    {
      label: 'Número de clientes',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#ff7929',
      borderDashOffset: 0.0,
      pointBackgroundColor:'#ff7929',
      pointBorderColor: '#ff7929',
      pointBorderWidth: 7,
      pointHoverRadius: 7,
      pointHoverBackgroundColor: '#ff7929',
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40,90],
    }
  ]
  },
  options: {
    maintainAspectRatio: false,
}
}
}
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
        boxShadow: '2px 2px 10px #00000021',
      }}>
      
        <div className='flex-top-charts'>
        <div>
           <i class="far fa-calendar-alt calendar-chart"></i>
          <span>Progreso Semanal</span> - <small>(Clientela)</small>
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