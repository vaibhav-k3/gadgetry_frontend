const URL = "http://127.0.0.1:8000/api/ListCreateProduct"

const getAllProducts = async () =>{

    const requestURL = URL
    const response = await fetch(requestURL)
    const resposneJson = await response.json()
    return await resposneJson

}

export default getAllProducts