import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url)=>{
    const {data} =await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'd0092d902amsh42af27144501affp1d920cjsn1044a9b98c6e',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}