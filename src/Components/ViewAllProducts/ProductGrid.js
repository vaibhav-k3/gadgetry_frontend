import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProductCard } from './ProductCard';
import getAllProducts from './api';
import { useLoaderData } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: ''
  },
  container: {
    height: '80vh', // set a fixed height for the container
  },
}));

export function ProductGrid(props) {
  const classes = useStyles();
  const products = useLoaderData()
  // Define an array of product objects
  // const products = [];

  // for (let i = 1; i <= 30; i++) {
  //   products.push({ id: i, name: `Product ${i}`, brand: `Brand ${String.fromCharCode(64 + i % 5 + 1)}` });
  // }

  // Create an array of ProductCard components
  // let products = []
  // getAllProducts.then(data => products=data)
  const cards = products.map((product) => (
    <Grid item xs={2} sm={6} md={4} lg={3} key={product.id}>
      <ProductCard productName={product.productName} brandName={product.productBrand} />
    </Grid>
  ));

  return (
    <Box className={classes.center}>
      <div className={classes.container}>
        <Grid container spacing={4}>
          {cards}
        </Grid>
      </div>
    </Box>
  );
}
