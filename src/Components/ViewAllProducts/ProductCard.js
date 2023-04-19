import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    cursor: 'pointer',
    background: "#F87272",
    width: "100%",
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
    <Card className={classes.card}>
      <CardContent>
        <CardMedia component='img' image="https://source.unsplash.com/random" alt='unsplash image' />
        <br />
        <Typography variant="h5">{props.productName}</Typography>
        <Typography variant="h6">{props.brandName}</Typography>
        {/* <Typography className={classes.typography} variant="body2" color="text.secondary">Product description</Typography> */}
      </CardContent>
    </Card>
  );
}
