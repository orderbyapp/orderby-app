import React from "react";
import { Chart } from "react-charts";

export default () => (
  // A react-chart hyper-responsively and continuusly fills the available
  // space of its parent element automatically
  <div
    style={{
      width: "100%",
      height: "300px",
      padding: '25px',
      background: 'white',
      borderRadius: '4px',
      boxShadow: '2px 2px 10px #DADADA',
    }}
  >
    <Chart
      data={[
        {
          label: "Series 1",
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: "Series 2",
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ]}
      axes={[
        { primary: true, type: "linear", position: "bottom" },
        { type: "linear", position: "left" }
      ]}
    />
  </div>
);



