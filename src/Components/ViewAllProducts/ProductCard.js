import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
      transform: 'scale(1.05)',
      background: "#F87272",
    },
  },
  media: {
    height: 140,
  },
  typography: {
    marginTop: theme.spacing(1),
  },
}));

export function ProductCard(props) {
  const classes = useStyles();

  return (
    <Box width="150px" className={classes.boc}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <CardMedia component='img' image="https://source.unsplash.com/random" alt='unsplash image' />
            <br />
            <Typography variant="h5">{props.productName}</Typography>
            <Typography variant="h6">{props.brandName}</Typography>
            {/* <Typography className={classes.typography} variant="body2" color="text.secondary">Product description</Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
