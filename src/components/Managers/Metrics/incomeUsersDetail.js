
import React, {Component} from 'react';
import { Line, Doughnut, Pie, Bar } from 'react-chartjs-2';
import '../Charts.css'
class ChartOne extends Component{
constructor(props){
 super(props)

 this.state = {
  data :  {
    labels: ['2010','2011','2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Datos de Valoración',
        borderColor: '#9a91fd',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(154, 145, 253, 0.406)',
        hoverBorderColor: '#9a91fd',
        data: this.props.data
      }
    ]
  }
}
}
  render(){
    return (

        <Line
          data={this.state.data}
          width={400}
          height={200}
          options={
            this.state.options
          }
        />
        
  
    )
  }
}

export default ChartOne;