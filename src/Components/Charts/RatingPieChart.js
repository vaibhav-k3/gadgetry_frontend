import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function RatingPieChart() {
    
    const [selectedValue, setSelectedValue] = useState('');
    
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const data_1 = {
      labels: ['5 star', '4 star', '3 star', '2 star', '1 star'],
      datasets: [
        {
          data: [12, 20, 9, 12, 6],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
          ],
        }
      ],
    };
    
    const data_2 = {
      labels: ['Microsoft', 'Logitech', 'Yamaha', 'Motorola', 'Glengery'],
      datasets: [
        {
          data: [99, 203, 54, 78, 312],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
          ],
        }
      ],
    };
    

    const options = {
      plugins: {
        title: {
          display: true,
          text: `Selected value: ${selectedValue}`,
        },
      },
      
    };
    
    return(
      <div style = {{width:'30%', height:'30%', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>Rating Chart</h2>
        <Pie data={data_1} />

        <h2 style={{ textAlign: 'center' }}>Brand Chart</h2>
        <Pie data={data_2} />
      </div>
      
    ) 
  }
  


export default RatingPieChart;