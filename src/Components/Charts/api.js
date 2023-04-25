const BASE_URL = "http://127.0.0.1:8000/api/"

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
