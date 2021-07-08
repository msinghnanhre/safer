import React from 'react'
import { Line } from 'react-chartjs-2'

const dynamic= "Line"

function LineChart({ data }) {

    return (
        <div>
            <Line
                data={{
                    labels: ['SK', 'AB', 'WP', 'ON', 'BC'],
                    datasets: [{
                        label: "Breaches",
                        data: data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 10)',
                        ],
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    // fill: true,
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'rgb(255, 150, 132)'
                        }
                    }
                }}
            />
        </div>
    )
    
}

export default LineChart
