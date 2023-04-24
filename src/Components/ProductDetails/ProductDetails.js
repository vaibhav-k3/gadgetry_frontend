
import React, { useEffect, useState } from 'react';
import { flexbox } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useLoaderData, useParams } from 'react-router-dom';
import ReviewCard from "./ReviewCard";
import { BorderColor } from '@mui/icons-material';
import getProductDetail from './api';

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
        }

    ],
    "productBrand": "TestProductBrand",
    "productDateAdded": "2023-03-08",
    "productDimensions": "2x3x4",
    "productImageUrl": "www.exampleUrl.com",
    "Username": "Testuser1"
}

const ProductDetails = (props) => {
    const  productData  = useLoaderData()
    // const [productData, setproductData] = useState(DUMMY)
    // // const productData =  getProductDetail(requiredProductname)
    // useEffect(() => {
    //    const data = getProductDetail(requiredProductname).then( data => setproductData(data))
    // //    console.log("INSIDE USE EFFECt")
    // //    console.log(data)
    // //     setproductData(data)
    // }, [])
    console.log(productData)
    const ProductDetailsContainer =
        <Container maxWidth="80vw" sx={{ display: 'flex' }}>
            <Box sx={{ BorderColor: 'black' }}>
                <Box component="div" sx={
                    {
                        display: "flex",
                        flexDirection: "column",
                        margin: '20px'

                    }
                }>
                    <div><h2> {productData.productName} </h2><br /><h3> {productData.productBrand} </h3></div>
                    <div></div>
                </Box>
                <Box component="div" sx={
                    {
                        display: "flex",
                        flexDirection: "row"

                    }
                }>
                    <Box sx={{ margin: '20px', maxHeight: '50vh' }}
                        component="img" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" />
                    <Box component="div" sx={{ display: 'flex', flexDirection: 'column', overflowY: 'Scroll', maxHeight: '70vh' }}>
                        {productData.product_reviews.map(
                            (review) => {
                                return (
                                    <Box>
                                        <ReviewCard Username={review.username} reviewText = {review.reviewText} />
                                    </Box>

                                )
                            })}
                    </Box>

                </Box>
            </Box>
        </Container>

    return ProductDetailsContainer
}

export default ProductDetails