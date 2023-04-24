import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ReviewForm = (props) => {
    const [inputReviewText , setInputReviewText] = useState('')
    const [inputReviewRating , setInputReviewRating] = useState('')
    const getReviewText = (event) =>{
        let reviewText = event.target.value
        setInputReviewText(reviewText)
    }

    const getReviewRating = (event) =>{
        let reviewRating = event.target.value
        setInputReviewRating(reviewRating)
    }

    const sendReview = () =>{
        props.submitReview(inputReviewText,inputReviewRating)
    }

    const review_form = <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <TextField
            id="ReviewText"
            label="Review"
            multiline
            maxRows={4}
            onChange={getReviewText}
        />
        <TextField
            id="ReviewRating"
            label="Rating"
            multiline
            maxRows={4}
            onChange={getReviewRating}
        />
        <div>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendReview} sx={{
                marginTop: '2vh'
            }}>
                Add
            </Button>

        </div>

    </Box>
    return review_form
}

export default ReviewForm