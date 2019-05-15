
import React, {Component} from 'react';
import { Line, Doughnut, Pie, Polar } from 'react-chartjs-2';
import '../Charts.css'
class IncomePolar extends Component{
constructor(props){
 super(props)

 this.state = {
  data :  {
    datasets: [{
      data: [
        11,
        61,
        17,
        35,
        
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
       
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      'Bebidas',
      'Comidas',
      'Postres',
      'Promociones',
    
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
        paddingBottom: '85px',
        background: 'white',
        borderRadius: '4px',
        boxShadow: '2px 2px 10px #00000021'
      }}>
      
        <div className='flex-top-charts'>
          <div>
            <i class="fa fa-chart-pie  calendar-chart"></i>
            <span>Base Producto</span> - <small>(Ingresos)</small>
          </div>
          <div>
            <small className='purple'>  2012 - 2019</small>
          </div>
        </div>
        <hr></hr>
        <Pie
            data={this.state.data}
            options={this.state.options}
            >

            </Pie>
        <div className='row'>
          <div className='col-xl-6 col-md-6 col-12'>

          </div>

        </div>
  
      </div>
    )
  }
}

export default IncomePolar;