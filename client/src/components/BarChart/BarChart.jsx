import React from 'react'
import { Bar } from "react-chartjs-2"
import "./BarChart.scss"

function BarChart({data}) {
    return (
        <div className="barChart">
            <Bar
                data={{
                    labels: ['Email', 'Network', 'others'],
                    datasets: [{
                        label: "Breaches",
                        data: [data.email.length, data.networkServer.length, data.others.length],
                        backgroundColor: [
                            'rgba(255, 99, 132, 10)',
                            'rgba(229, 198, 70, 10)',
                            'rgba(0, 96, 151, 10)',
                        ],
                    },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    //fill: true,
                    legend: {
                        display: true,
                        labels: {
                            fontColor: "blue",
                            fontSize: 18
                        }
                    }
                }}
            />
            <h5 style={{padding: "1rem"}}>Bar Graph</h5>
        </div>
    )
}

export default BarChart
