import React, { useState } from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import { updateReview } from './api'

const ReviewCard = (props) => {
    const [reviewId, setReviewId] = useState(props.reviewId)
    const [updatePressed, setUpdatePressed] = useState(false)
    const [reviewtext , setReviewText] = useState(props.reviewText)
    const removeReview = props.removeReview

    const newReview = (event) => {
        const reviewDate = new Date().toJSON()
        const productName = props.productName
        const username = props.Username

        const requestPayload = {
            "reviewText":reviewtext,
            "reviewDate":reviewDate,
            "reviewRating":5,
            "productName":productName,
            "username":username,
            "reviewTitle":"ahshsdj"
        }
        
        let result = updateReview(reviewId,requestPayload)
        result.then((data)=>{
            setUpdatePressed(false)
            // setReviewText(event.target.value)
        })
        

    }

    const card = <Card sx={{ width: '50vw', whiteSpace: 'nowrap' }}>
        <CardContent>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={`${props.Username}`}
                subheader="September 14, 2016"
                align="left"
            />
            <Typography gutterBottom variant="h5" component="div" align="left">
                {props.reviewTitle}
            </Typography>

            {
                updatePressed ? (
                    <>
                    <TextField
                        id="ReviewText"
                        label="Review"
                        multiline
                        maxRows={4}
                        defaultValue={reviewtext}
                        onChange={(e)=>setReviewText(e.target.value)}
                    />
                    
                    <div>
                        
            <Button variant="contained" endIcon={<SendIcon />} onClick={(e)=>newReview(e)} sx={{
                marginTop: '2vh'
            }}>
                Update
            </Button>
            

        </div>
        </>

                ) : (
                    <Typography variant="body2" color="text.secondary" align="left">
                        {reviewtext}
                    </Typography>
                )


            }
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={(e) => { removeReview(reviewId) }}>
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={(e) => setUpdatePressed(true)}>
                <EditIcon />
            </IconButton>
        </CardActions>
    </Card>

    return card

}

export default ReviewCard;