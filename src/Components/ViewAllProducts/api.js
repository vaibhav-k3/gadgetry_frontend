const URL = "https://gadgetry-dj-backend.herokuapp.com/api/ListCreateProduct"

const getAllProducts = async () =>{

    const requestURL = URL
    const response = await fetch(requestURL)
    const resposneJson = await response.json()
    return await resposneJson

}

export default getAllProducts