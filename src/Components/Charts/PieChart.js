import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {getRatingData} from './api'
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
    // let data = {
    //     labels: [],
    //     datasets: [
    //         {
    //             label: '# of Votes',
    //             data: [],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //             ],
    //             borderWidth: 1,
    //         },
    //     ],
    // };

    const [chartData, setchartData] = useState({
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
    })
    const [radioValue, setRadioValue] = useState('')
    const getChartData=()=>{
        const resp = getRatingData(radioValue)
        
        resp.then(resp=>{
            
            // console.log(data)
            const labels = resp.map((reviewData)=>{
                return reviewData.reviewRating
            })
            const ratingCount = resp.map((reviewData)=>{
                return reviewData.review_count
            })
        
            chartData.labels = labels
            chartData.datasets[0].data = ratingCount
            console.log("setting chart")
            setchartData(chartData)
        })


    }
    const handleChange = (event) => {
        event.preventDefault();
        setRadioValue(event.target.value);
        getChartData()
    };
    console.log(chartData)
    return <React.Fragment>
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleChange}
                value={radioValue}
            >
                <FormControlLabel value="Microsoft" control={<Radio />} label="Microsoft" />
                <FormControlLabel value="Samsung" control={<Radio />} label="Samsung" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>
        { chartData.datasets[0].data.length>0 && <Pie data={chartData} />}
    </React.Fragment>;
}

export default PieChart