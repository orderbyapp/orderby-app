
import React, {Component} from 'react';
import { Line, Doughnut, HorizontalBar } from 'react-chartjs-2';
import './Charts.css'
class ChartTwo  extends Component{
constructor(props){
 super(props)

 this.state = {
  data :  {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Ingresos',
        backgroundColor: '#fe3569',
        borderWidth: 0,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40, 20]
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
      <div className="chart"     style={{
        width: "100%",
        height: "320px",
        maxHeight: '320px',
        padding: '25px',
        paddingTop: '20px',
        paddingBottom: '70px',
        background: 'white',
        borderRadius: '4px',
        boxShadow: '2px 2px 10px #00000021',
      }}>


<div className='flex-top-charts'>
        <div>
        <i class="fa fa-chart-line calendar-chart"></i>  
      Flujo Anual
        </div>
        <div>
        <small className='purple'>  Año 2019</small>
        </div>
        </div>
        <hr></hr>
        
      
       
        <HorizontalBar data={this.state.data} 
         options={this.state.options}/>

  
      </div>
    )
  }
}

export default ChartTwo;