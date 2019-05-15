
import React, {Component} from 'react';
import { Line, Doughnut, Pie, Polar,  } from 'react-chartjs-2';
import '../Charts.css'
class IncomePolar extends Component{
constructor(props){
 super(props)

 this.state = {
  data :  {
    labels: [
      'Camareros',
      'Gerencia',
      'Servicio',
      'Cocina'
    ],
    datasets: [{
      data: [100, 50, 100, 140],
      backgroundColor: [
      '#c4d601',
      '#9a91fd',
      '#fe3569',
      '#ff7929'
      ],
      hoverBackgroundColor: [
      '#c4d601',
      '#9a91fd',
      '#fe3569',
      '#ff7929'
      ]
    }]
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
        paddingBottom: '85px',
        background: 'white',
        borderRadius: '4px',
        boxShadow: '2px 2px 10px #00000021'
      }}>
      
        <div className='flex-top-charts'>
          <div>
            <i class="fa fa-chart-pie  calendar-chart"></i>
            <span>Base staff</span> - <small>(Ingresos)</small>
          </div>
          <div>
            <small className='purple'>  2012 - 2019</small>
          </div>
        </div>
        <hr></hr>
        <Doughnut
            data={this.state.data}
            options={this.state.options}
            >

            </Doughnut>
        <div className='row'>
          <div className='col-xl-6 col-md-6 col-12'>

          </div>

        </div>
  
      </div>
    )
  }
}

export default IncomePolar;