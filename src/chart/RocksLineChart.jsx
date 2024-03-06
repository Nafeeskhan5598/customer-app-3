import React, { useState } from "react";

import { Line } from 'react-chartjs-2';
import { Chart as chartJs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

chartJs.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler
)


function RockLineChart(props) {

    const [data] = useState({

        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: "First DataSet",
                data: props.LIneData[0].line,
                backgroundColor: '#a5cedb',
                // borderColor: 'red',
                border: false,
                tension: '0.4',
                fill: true,
                showLine: false,
            },


            {
                label: "First DataSet",
                data: props.LIneData[0].secondLine,
                backgroundColor: '#84a8ff',
                // borderColor: 'red',
                border: false,
                tension: '0.4',
                fill: true,
                showLine: false,
                // yAxisID: 'y-axis-0',

                gridLines: {
                    display: false,
                }
            },

            {
                label: "First DataSet",
                data: props.LIneData[0].thirdLine,
                backgroundColor: '#2055eb',
                // borderColor: 'red',
                border: false,
                tension: '0.4',
                fill: true,
                showLine: false
            }
        ]
    });

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    display: false,
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            },
        },
    };

    return (

        <>
            <div style={{ height: "290px", width: "100%" }}>
                <Line style={{ width: "100%" }} data={data} options={options}></Line>
            </div>
        </>
    )
}
export default RockLineChart;