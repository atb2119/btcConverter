import React from 'react';
import { Line } from 'react-chartjs-2'
import { Box } from '@mui/system';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { last7Days }from '../util/getDates'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



function Graph(props) {

  const mBtcWeek = props.weekPrices.map((ele) => ele / 1000)

  const state = {
    labels: last7Days(),
    datasets: [
      {
        label: 'mBTC - Last 7 Days',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: mBtcWeek,
       
        
      }
    ]
  }

  const options = {
    scales: {
     y: {
       ticks: {
        callback: function(value, index, values) {
          return '$' + value;
        }
       }
     }
    }
  }

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "background.inner",
      border: 1,
      borderRadius: 1,
      p: 2,
      width: "30vw",
      height: "28vh",
      boxShadow: "20",
      marginBottom: "40em",
    }}>
      <Line
          data={state}
          options={options}
        />
    </Box>
  );
}

export default Graph;