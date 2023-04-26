import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getRatingData } from './api'
import { useLoaderData } from 'react-router';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
ChartJS.register(ArcElement, Tooltip, Legend);

export let data = {
    labels: [],
    datasets: [
        {
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function PieChart() {
    let dataTemplate = {
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ],
            }
        ],
    }
    const [chartData, setchartData] = useState(dataTemplate)
    const [radioValue, setRadioValue] = useState('')
    const data = useLoaderData()
    console.log(data)
    const getChartData = () => {
        const resp = getRatingData(radioValue)

        resp.then(resp => {

            // console.log(data)
            const labels = resp.map((reviewData) => {
                return reviewData.reviewRating
            })
            const ratingCount = resp.map((reviewData) => {
                return reviewData.review_count
            })

            dataTemplate.labels = labels
            dataTemplate.datasets[0].data = ratingCount
            console.log("setting chart")
            setchartData(dataTemplate)
        })


    }
    const handleChange = (event) => {
        event.preventDefault();
        setRadioValue(event.target.value);
        // getChartData()
    };
    console.log(chartData)
    return <React.Fragment>
        <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                label="Age"
                onChange={handleChange}
            >
                
            {
                data.map((product)=>{
                    return <MenuItem value={product.productBrand}>{product.productBrand}</MenuItem>
                })
            }
                    
                    
                
            </Select>
            <Button variant="contained" onClick={(e) => getChartData()}>Get Data</Button>
        </FormControl>
        {chartData.datasets[0].data.length > 0 &&
            <div style={{ width: '30%', height: '30%', margin: 'auto' }}>

                <Pie data={chartData} />
            </div>
        }
    </React.Fragment>;
}

export default PieChart