import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProductCard } from './ProductCard';
import getAllProducts from './api';
import { useLoaderData } from 'react-router-dom';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: ''
  },
  
}));

export function ProductGrid(props) {
  const classes = useStyles();
  const products = useLoaderData()

  const cards = products.map((product) => {
    let imageURL = product.productImageUrl.split(',')[0]
      return (
        
      <Grid item lg={3} key={product.id} >
        <ProductCard  productName={product.productName} brandName={product.productBrand} imageURL={imageURL} />
      </Grid>
      )
  })

  return (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <Grid container spacing={8} rowSpacing={10} columnSpacing={{ xs: 10, sm: 10, md: 10 }}>
          {cards}
        </Grid>
      </div>
    </Container>
  );
}
