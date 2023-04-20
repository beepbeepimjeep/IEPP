const axios = require('axios');
require('dotenv').config();
const flatted = require('flatted');
const fakeNewChecker = async (news)=>{
    const claim = news;
    const apiKey = process.env["GOOGLE_LOOKUP_API"];

    /*try{
        const response = await axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${apiKey}&query=${claim}`);
        const data = flatted.stringify(response);
        return data;
    }catch (error){
        console.log(error);
        return null;
    }*/
    try{
        const data = axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${apiKey}&query=${claim}`)
            .then(response => {
                //console.log(response.data)
                return response.data;
            })
            .catch(error => {
                console.log(error)
                return [];
            })
        return data;
    }catch (error){
        console.log(error)
        return null;
    }

}

module.exports = {
    fakeNewChecker
}