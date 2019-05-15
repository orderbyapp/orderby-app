
import React, {Component} from 'react';
import { Line, Doughnut, Pie, Bar } from 'react-chartjs-2';
import '../Charts.css'
class ChartOne extends Component{
constructor(props){
 super(props)

 this.state = {
  data :  {
    labels: ['Bebidas','Para Picar','Platos Healthy', 'Primer Plato', 'Platos Estrella', 'Happy Ending', 'Promociones'],
    datasets: [
      {
        label: 'Datos en Unidades',
        backgroundColor: 'rgba(255, 120, 41, 0.564)',
        borderColor: '#ff7929',
        borderWidth: 1,
        hoverBackgroundColor: '#ff7929',
        hoverBorderColor: '#ff7929',
        data: [45,55,65, 59, 80, 81, 42, 75, 40,0,100]
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
        marginTop: '25px',
        boxShadow: '2px 2px 10px #00000021'

      }}>
      
        <div className='flex-top-charts'>
          <div>
            <i class="far fa-chart-bar calendar-chart"></i>
            <span>Progreso Anual</span> - <small>(Ingresos)</small>
          </div>
          <div>
            <small className='purple'>  2012 - 2019</small>
          </div>
        </div>
        <hr></hr>
        <Line
          data={this.state.data}
          width={130}
          height={50}
          options={
            this.state.options
          }
        />
        <div className='row'>
          <div className='col-xl-6 col-md-6 col-12'>

          </div>

        </div>
  
      </div>
    )
  }
}

export default ChartOne;