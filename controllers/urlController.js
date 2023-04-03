const axios = require('axios');
const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
    host: '34.129.14.82',
    port: 3306,
    user: 'root',
    password: '012ebecbd6b870d3',
    database: '5120finalproject',
    connectionTimeout: 3000
});

const urlSearch = async (req, res) => {
    const domain = req.params.url;

    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL server!');

        connection.query(`SELECT * FROM collectionURL WHERE urlLink = '${domain}' `, (err, results) => {
            if (err) throw err;
            if(results.toString().length==0){
                connection.query(`SELECT * FROM maliciousURL WHERE urlLink = '${domain}' `, (err, results) => {
                    if (err) throw err;
                    if(results.toString().length==0){
                        axios.get(`https://webrisk.googleapis.com/v1/uris:search?threatTypes=MALWARE&uri=${domain}&key=${process.env["GOOGLE_LOOKUP_API"]}`)
                            .then(response => {
                                // Handle the response data here
                                console.log(response.data);
                                return {result : response.data};
                            })
                            .catch(error => {
                                // Handle any errors that occurred during the request
                                console.log(error);
                            });
                    }else {
                        return {result : results};
                    }
                });
            }else {
                return {result : results};
            }
        });

        connection.query(`SELECT * FROM maliciousURL WHERE urlLink = '${domain}' `, (err, results) => {
            if (err) throw err;
            console.log(results);
            if(results){

            }
        });

        // Close the connection when you're done with it
        connection.end((err) => {
            if (err) throw err;
            console.log('Connection closed!');
        });
    });

    res.render('');
}

module.exports = {
    urlSearch
}
