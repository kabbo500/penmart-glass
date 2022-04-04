import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './MyChart.css'
const MyChart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChart(data));
    }, []);

    return (
        <div className='chart'>
            <div>
                <LineChart width={800} height={400} data={chart}>
                    <Line dataKey={'investment'} stroke="#82ca9d"></Line>
                    <Line dataKey={'revenue'} stroke="#8884d8"></Line>
                    <Line dataKey={'sell'} stroke="orange"></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </LineChart>
                <h3>Simple Line-Chart</h3>
            </div>
            <div>
                <BarChart width={800} height={400} data={chart}>
                    <Bar dataKey={'investment'} fill="#8884d8"></Bar>
                    <Bar dataKey={'revenue'} fill="#82ca9d"></Bar>
                    <Bar dataKey={'sell'} fill="orange"></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </BarChart>
                <h2>Simple Bar-Chart</h2>
            </div>
        </div>
    );
};

export default MyChart;