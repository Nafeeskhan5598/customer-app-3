import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);



function BarCharts(props) {
  const data = {
    labels: ['Other', 'Agent Referral', 'Self', 'Referral', 'Magicbricks.com', 'Magicbricks(Free)', 'Housing.com', 'Cold Calling', 'Club Data', '99acres.com'],
    datasets: [
      {
        label: 'In Progress',
        data : props.barChartFirstValue,      //[10, 60, 20, 150, 5, 70, 50, 30, 10, 220]
        backgroundColor: ["blue"]
      },
      {
        label: 'Disqualified',
        data: props.barChartSecondValue,   // [120, 180, 10, 130, 10, 60, 200, 40, 20, 200],
        backgroundColor: ["red"]
      },
      {
        label: 'Qualified',
        data: props.barChartThirdValue,  // [90, 150, 30, 110, 15, 10, 170, 10, 10, 160],
        backgroundColor: ["green"]
      }

    ]
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="App">
      <div style={{ padding: '20px', width: '100%', margin: 'auto', height: '345px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default BarCharts;
