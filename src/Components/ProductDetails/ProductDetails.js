
import React from 'react';
import { flexbox } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ReviewCard from "./ReviewCard";


const ProductDetails = (props) => {

    const ProductDetailsContainer =

        <Container maxWidth="lg">
            <Box component="div" sx={
                {
                    display: "flex",
                    flexDirection: "row"

                }
            }>
                <Box component="img" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
                <Box component="div">
                    This is the product name
                </Box>

            </Box>
            <Box sx={{ display:'flex', justifyContent: 'center',  flexDirection:'column'}}>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </Box>


        </Container>

    return ProductDetailsContainer
}

export default ProductDetails