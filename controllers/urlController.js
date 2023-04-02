const axios = require('axios');
require('dotenv').config();


const urlSearch = async (req,res)=>{
    var domain = req.params.url;

    axios.get(`https://webrisk.googleapis.com/v1/uris:search?threatTypes=MALWARE&uri=${domain}&key=${process.env["GOOGLE_LOOKUP_API"]}`)
        .then(response => {
            // Handle the response data here
            console.log(response.data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.log(error);
        });
    res.render('')
}

module.exports = {
    urlSearch
}