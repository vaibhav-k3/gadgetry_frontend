import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
const ReviewCard = (props) => {
    console.log("---------------------------")
    console.log(props)
    const card = <Card sx={{ width: '50vw' , m:1}}>
        <CardContent>
            <CardHeader
            avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                    }
                title={`${props.Username}`}
                subheader="September 14, 2016"
                align = "left"
            />
            <Typography gutterBottom variant="h5" component="div" align="left">
                Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
                Lizards
            </Typography>
        </CardContent>
    </Card>

    return card

}

export default ReviewCard;