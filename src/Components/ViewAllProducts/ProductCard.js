import React, { useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 310,
    cursor: 'pointer',
    width: "100%",
    background: "#FF6363",
    transition: 'transform 0.3s ease-in-out',
    borderRadius: '20px', // add border radius for curved corners
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)', // add box shadow with 50% opacity
    '&:hover': {
      transform: 'scale(1.08)',
      background: "#F87272",
    },
  },
  media: {
    height: 190, // decrease height of the image
    borderRadius: '18px',
  },
  typography: {
    marginTop: theme.spacing(1),
  },
}));

export function ProductCard(props) {
  const classes = useStyles();
  const [productName, setProductName] = useState(props.productName)
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/ViewProductDetails/'+ encodeURI(productName))
  }

  return (
    <Box width="150px" height="150px" className={classes.boc}>
      <Card className={classes.card}>
        <CardActionArea onClick={handleClick}>
          <CardContent sx={{overflow: "clip" , height:"200px"}}>
            <CardMedia className = {classes.media} component='img' image={props.imageURL} alt='unsplash image' />
            <br />
            <Typography variant="h5" sx={{overflow: "clip" , height:"200px"}}>{props.productName}</Typography>
            <Typography variant="h6" sx={{overflow: "clip" , height:"200px"}}>{props.brandName}</Typography>
            {/* <Typography className={classes.typography} variant="body2" color="text.secondary">Product description</Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
