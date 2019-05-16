
import React, {Component} from 'react';
import { Line, Doughnut, Pie, Bar } from 'react-chartjs-2';
import '../Charts.css'
import Table from '../../../sources/occupied-table.svg'

class ChartOne extends Component{
constructor(props){
 super(props)

 this.state = {
  data :  {
    labels: ['Lunes','Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    datasets: [
      {
        label: 'Datos en Minutos',
        borderColor: '#ff7929',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(154, 145, 253, 0.406)',
        hoverBorderColor: '#9a91fd',
        data: [30,50,55,45,72,80,10]
      }
    ]
  }
}
}
  render(){
    return (
      <div className="chart mb-4"     style={{
        width: "100%",
        padding: '25px',
        maxHeight: '500px',
        paddingTop: '20px',
        paddingBottom: '65px',
        background: 'white',
        borderRadius: '4px',
        marginTop: '25px',
        boxShadow: '2px 2px 10px #00000021'

      }}>
      
        <div className='text-center w-100 pl-5 pr-5 pt-0'>
        <img src={Table} className='imageother'></img>
        </div>
        <div>
        <div>
            <i class="far fa-clock calendar-chart"></i>
            <span>Time mesas</span> - <small>(Sem)</small>
          </div>
        </div>
        <hr></hr>
        <div className='pr-3'>
        <Line
          data={this.state.data}
          width={150}
          height={120}
          options={
            this.state.options
          }
        />
        </div>
       
        <div className='row'>
          <div className='col-xl-6 col-md-6 col-12'>

          </div>

        </div>
  
      </div>
    )
  }
}

export default ChartOne;