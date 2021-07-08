import React from 'react'
import { Bar } from 'react-chartjs-2'
import "./LineChart.scss"


function LineChart({ data }) {

    return (
        <div className="barchart">
            <Bar
                data={{
                    labels: ['Email', 'Network', 'others'],
                    datasets: [{
                        label: "Breaches",
                        data: [data.email.length,data.networkServer.length,data.others.length],
                        backgroundColor: [
                            'rgba(255, 99, 132, 10)',
                            'rgba(229, 198, 70, 10)',
                            'rgba(0, 96, 151, 10)',
                        ],
                    },
                        // {
                        //     label: "something",
                        //     data: [email.length, , 6, 7, 3],
                        //     backgroundColor: [
                        //         'rgba(46, 102, 229, 1)'
                        //     ],
                        // }
                    ]
                }}
                height={150}
                width={100}
                options={{
                    maintainAspectRatio: false,
                    // fill: true,
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'red'
                        }
                    }
                }}
            />
        </div>
    )
    
}

export default LineChart
