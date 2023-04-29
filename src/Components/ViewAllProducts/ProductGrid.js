import React from 'react';
import { Box, Grid } from '@material-ui/core';
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
  const cards = products.map((product) => {
    let imageURL = product.productImageUrl.split(',')[0]
    return (<Grid item lg={3} key={product.id}>
      <ProductCard  productName={product.productName} brandName={product.productBrand} imageURL={imageURL} />
    </Grid>)
  })

  return (
    <Container maxWidth="lg">
      <Box className={classes.center}>
        <div className={classes.container} >
          <Grid container spacing={4} rowSpacing={6}>
            {cards}
          </Grid>
        </div>
      </Box>
    </Container>

  );
}
