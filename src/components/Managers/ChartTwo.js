
import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class ChartOne extends Component{
constructor(props){
 super(props)

 this.state = {
   data: {
     labels: ['1','2','3','4','5'],
     datasets: [
       {
         label: 'videos mades',
         backgroundColor: 'red',
         data:[4,5,6,7,78,9,5]
       },
       {
         label: 'subcriptions',
         backgroundColor: 'blue',
         data: [1,5,7,0,23,4,6]
       }
     ]
   }
 }
}
  render(){
    return (
      <div className="chart"     style={{
        width: "100%",
        height: "300px",
        maxHeight: '300px',
        padding: '25px',
        background: 'white',
        borderRadius: '4px',
        boxShadow: '2px 2px 10px #DADADA',
      }}>
      <Line
      height={300}
      options={{
        responsive: true,
        maintainAspectRatio: false
      }}
      data={this.state.data}
      ></Line>
      </div>
    )
  }
}

export default ChartOne;