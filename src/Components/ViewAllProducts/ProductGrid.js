import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProductCard } from './ProductCard';

const useStyles = makeStyles((theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export function ProductGrid(props) {
  const classes = useStyles();

  // Define an array of product objects
  const products = [
    { id: 1, name: 'Product 1', brand: 'Brand A' },
    { id: 2, name: 'Product 2', brand: 'Brand B' },
    { id: 3, name: 'Product 3', brand: 'Brand C' },
    { id: 4, name: 'Product 4', brand: 'Brand D' },
    { id: 5, name: 'Product 5', brand: 'Brand E' },
  ];

  // Create an array of ProductCard components
  const cards = products.map((product) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
      <ProductCard productName={product.name} brandName={product.brand} />
    </Grid>
  ));

  return (
    <Box className={classes.center}>
      <Grid container spacing={3}>
        {cards}
      </Grid>
    </Box>
  );
}
