const URL = "http://127.0.0.1:8000/api/getProduct/"

const getProductDetail = async ({request , params}) =>{

    const requestURL = URL + params.requiredProductname
    const response = await fetch(requestURL)
    const resposneJson = await response.json()
    return resposneJson

}

export default getProductDetail