import React from 'react';
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RealtimeChart = ({data}) => {
  const [labels,setLabels] = useState([])
  const [dataSet,setDataSet] = useState([])

  useEffect(() => {
    if (data === undefined) {
      return
    }
    var event = new Date(data.liveTrade.timestamp);
    let time = event.toLocaleTimeString('en-US')

    setLabels(prevLabels => {
      let updatedLabels = [...prevLabels, time];
    
      if (updatedLabels.length > 100) {
        updatedLabels = updatedLabels.slice(50); // Remove the first element
        
      }
    
      return updatedLabels;
    });

    setDataSet(prevData => {
      let updatedData = [...prevData, data.liveTrade.last_price];
    
      if (updatedData.length > 100) {
        updatedData = updatedData.slice(50);
      }
    
      return updatedData;
    });
    
  },[data])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Realtime trade',
      },
    },
  };

  const chartdata = {
    labels,
    datasets: [
      {
        label: 'DELTA',
        data: dataSet,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Line options={options} data={chartdata} />
  )
}
export default RealtimeChart
