
import React from 'react';
import { flexbox } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ReviewCard from "./ReviewCard";
import { BorderColor } from '@mui/icons-material';

const DUMMY = {
    "productName": "TestProduct1",
    "product_reviews": [
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        },
        {
            "ReviewId": "6bd15a38-eef6-4475-82ad-6649c047fb19",
            "reviewText": "A review",
            "reviewDate": "2023-01-01T00:00:00Z",
            "reviewRating": 4,
            "productName": "TestProduct1",
            "username": "Testuser1"
        }
    ],
    "productBrand": "TestProductBrand",
    "productDateAdded": "2023-03-08",
    "productDimensions": "2x3x4",
    "productImageUrl": "www.exampleUrl.com",
    "Username": "Testuser1"
}

const ProductDetails = (props) => {

    const ProductDetailsContainer =

        <Container maxWidth="80vw" sx={{ display: 'flex' }}>
            <Box sx={{BorderColor:'black'}}>
                <Box component="div" sx={
                    {
                        display: "flex",
                        flexDirection: "column",
                        margin: '20px'

                    }
                }>
                    <div><h2> Product Name </h2><br /><h3> Brand </h3></div>
                    <div></div>
                </Box>
                <Box component="div" sx={
                    {
                        display: "flex",
                        flexDirection: "row"

                    }
                }>
                    <Box sx={{ margin: '20px' , maxHeight: '50vh'}} component="img" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
                    {/* <Box component="div" sx={{ display: 'flex', alignItems: 'center', height: '40vh', justifyContent: 'center', margin: '20px' }}>
                    <h2>This is the product name</h2>
                </Box> */}
                <Box component="div" sx={{ display: 'flex', flexDirection: 'column',overflowY:'Scroll', maxHeight:'70vh'}}>
                    {DUMMY.product_reviews.map(
                        (review) => {
                            return <Box>
                             <ReviewCard Username={review.username} />
                            </Box>
                        })}
                </Box>
                
                </Box>
            </Box>

            {/* <Box sx={{}}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    {DUMMY.product_reviews.map(
                        (review) => {
                            console.log(review.username);
                            return <ReviewCard Username={review.username} />
                        })}
                </Box>

            </Box> */}
            {/* 
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                {DUMMY.product_reviews.map(
                    (review) => {
                        console.log(review.username);
                        return <ReviewCard Username={review.username} />
                    })}
            </Box> */}


        </Container>

    return ProductDetailsContainer
}

export default ProductDetails