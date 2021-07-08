import React from 'react'
import { Pie } from "react-chartjs-2"


function PieChart({data}) {
    return (
        <div>
            <Pie
                data={{
                    labels: ['Red'],
                    datasets: [{
                        label: "something",
                        data: data,
                        backgroundColor: [
                            'rgba(255, 100, 64, 1)'
                        ],
                    }]
                }}
                height={300}
                width={500}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default PieChart
