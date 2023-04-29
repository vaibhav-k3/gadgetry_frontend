
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useLoaderData, useParams } from 'react-router-dom';
import ReviewCard from "./ReviewCard";
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import ReviewForm from './ReviewForm';
import { postReview,deleteReview } from './api';
const ProductDetails = (props) => {
    const productData = useLoaderData()
    const [userReviews , setUserReviews] = useState(productData.product_reviews)

    const submitReview = (reviewText, reviewRating,reviewTitle) =>{
        const reviewDate = new Date().toJSON()
        const productName = productData.productName
        const username = productData.Username

        const requestPayload = {
            "reviewText":reviewText,
            "reviewDate":reviewDate,
            "reviewRating":reviewRating,
            "productName":productName,
            "username":username,
            "reviewTitle":reviewTitle
        }
        
        let result = postReview(requestPayload)
        result.then((data)=>{
            setUserReviews((reviews)=>{
                return [data , ...reviews]
            })
        })


    }

    const removeReview = (reviewId) =>{
        console.log(reviewId)
        let result = deleteReview(reviewId);
        result.then((resp)=>{
            if (resp.ok){
                console.log(resp.ok)
                setUserReviews((reviews)=>{
                    return reviews.filter((review)=>{
                        return review.ReviewId != reviewId
                    })
                })
            }
        })

    }
    let imageURL = productData.productImageUrl.split(',')[0]



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
                    <Box component="div">
                        <Box sx={{ margin: '20px', maxHeight: '50vh' }}
                            component="img" src={imageURL} />
                        <ReviewForm submitReview= {submitReview}/>
                    </Box>

                    <Box component="div" sx={{ display: 'flex', flexDirection: 'column', overflowY: 'Scroll', maxHeight: '70vh' }}>
                        {userReviews.map(
                            (review) => {
                                return (
                                    <Box>
                                        <ReviewCard Username={review.username} reviewText={review.reviewText} 
                                                reviewTitle = {review.reviewTitle} removeReview = {removeReview}
                                                reviewId = {review.ReviewId}
                                                key = {review.ReviewId}
                                                rating = {review.reviewRating} 
                                                productName = {review.productName}/>
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