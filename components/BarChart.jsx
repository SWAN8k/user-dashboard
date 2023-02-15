import { React, useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


function BarChart() {
    const[chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(()=>{
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'Salses $',
                    data: [181270, 222010, 194900, 179380, 241820, 168420, 224475],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53,162,235, 0.4',
                }
            ],
        })
        setChartOptions({
            plugins: {
                legend:{
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Daily revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
        
    },[])





    return (
        <>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Bar data={chartData} options={chartOptions}/>
            </div>
        </>
    )
}

export default BarChart
