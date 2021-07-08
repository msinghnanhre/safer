import React from 'react'
import { Pie } from "react-chartjs-2"



function PieChart({ data }) {
    const peopleAffected = () => {
        console.log(data)
    }
    return (
        <div>
            <Pie
                data={{
                    labels: ['Email', 'Network', 'others'],
                    datasets: [{
                        label: "Breaches",
                        strokeColor: "rgba(255,255,255,1)",
                        fillColor: "rgba(50,182,93,0.5)",
                        data: [data.email.length, data.networkServer.length, data.others.length],
                        backgroundColor: [
                            'rgba(255, 99, 132, 10)',
                            'rgba(229, 198, 70, 10)',
                            'rgba(0, 96, 151, 10)',
                        ],
                        fontColor: 'rgba(0, 96, 151, 10)',
                    },
                    ]
                }}
                
                options={{
                    scale: {
                        label: {
                            color: "#ffffff",
                       } 
                    },
                    maintainAspectRatio: false,
                        display: true,
                        legend: {
                            labels: {
                                fontColor: "#ffffff",
                                fontSize: 18
                            }
                        }
                }}
            />
            <h5 style={{ padding: "1rem" }}>Pie Chart</h5>
        </div>
    )
}

export default PieChart
