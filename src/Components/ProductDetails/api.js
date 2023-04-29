

const BASE_URL = " https://gadgetry-dj-backend.herokuapp.com/api/"

export const getProductDetail = async ({request , params}) =>{
    const API_ENDPOINT = BASE_URL + 'getProduct/'
    const requestURL = API_ENDPOINT + encodeURI(params.requiredProductname)
    const response = await fetch(requestURL)
    const resposneJson = await response.json()
    return resposneJson

}

export const postReview = async (reviewPayload) =>{
    const API_ENDPOINT = BASE_URL + 'createReview'
    const response = await fetch(API_ENDPOINT ,{
        method : "POST",
        body: JSON.stringify(reviewPayload),
        headers : {'Content-type':'application/json'}
    })
    const resposneJson = await response.json()
    return resposneJson    


}
export const deleteReview = async (reviewId) =>{
    const API_ENDPOINT = BASE_URL + 'deleteReview/' + encodeURI(reviewId)
    const response = await fetch(API_ENDPOINT ,{ method : "DELETE"})
    return response

}

export const updateReview = async (reviewId, requestpayload) =>{
    const API_ENDPOINT = BASE_URL + 'updateReview/' + encodeURI(reviewId)
    console.log(requestpayload)
    const response = await fetch(API_ENDPOINT ,{ 
        method : "PUT",
        headers :{
            'Content-type':'application/json'
        },
        body : JSON.stringify(requestpayload)
    
})
    return response

} 