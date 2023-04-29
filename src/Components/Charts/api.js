const BASE_URL = " https://gadgetry-dj-backend.herokuapp.com/api/"

export const getRatingData = async (brandName)=>{
    const API_ENDPOINT = BASE_URL + 'brandchart?'
    const searchParams = new URLSearchParams({
        'brand':brandName
    })
    const request = API_ENDPOINT + searchParams
    const response = await fetch(request)
    const responsejson = await response.json()
    return responsejson
}

export const getAllBrands = async ({request , params})=>{
    const API_ENDPOINT = BASE_URL + 'getAllBrands'
    const response = await fetch(API_ENDPOINT,{
        method:"GET",
        // headers :{
        //     'Access-Control-Allow-Origin':'nocors'
        // }
    })
    const responsejson = await response.json()
    return responsejson
}


