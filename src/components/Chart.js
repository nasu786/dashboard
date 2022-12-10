import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export default function Chart() {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "BAR",
            },
        },
    };
    
    const data  = {
        labels: ['Jan', "Feb", 'Mar', "Apr", "May"],
        datasets: [
            {
                label: "Present",
                data: [11, 13, 12, 14, 12],
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: "Absent",
                data: [4, 2, 3, 5, 3],
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
        ]
    }

    return (
        <Bar options={options} data={data} />
    )
}
