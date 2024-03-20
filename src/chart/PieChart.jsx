import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

function PieChart() {
    const data = {
        labels: ['Customer', 'Network Consultant', 'General Contacts'],
        datasets: [
            {
                data: [3, 6, 9],
                backgroundColor: ['aqua', 'orange', 'purple']
            }
        ]
    };

    const options = {};

    return (
        <div className="App">
            <div style={{ padding: '20px', width: '50%', margin: 'auto' }}>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
}

export default PieChart;
