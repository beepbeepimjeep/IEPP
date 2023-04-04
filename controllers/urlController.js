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
    let sentData;
    try {
        const results = await Promise.all([
            new Promise((resolve, reject) => {
                connection.query(`SELECT * FROM collectionURL WHERE urlLink = '${domain}' `, (err, results) => {
                    if (err) reject(err);
                    else resolve(results);
                });
            }),
            new Promise((resolve, reject) => {
                connection.query(`SELECT * FROM maliciousURL WHERE urlLink = '${domain}' `, (err, results) => {
                    if (err) reject(err);
                    else resolve(results);
                });
            }),
            axios.get(`https://webrisk.googleapis.com/v1/uris:search?threatTypes=MALWARE&uri=${domain}&key=${process.env["GOOGLE_LOOKUP_API"]}`)
                .then(response => {
                    return response.data;
                })
                .catch(error => {
                    console.log(error);
                    return [];
                })
        ]);
        return results;
    } catch (error) {
        console.log(error);
        throw new Error('Internal server error');
    } finally {
        connection.end((err) => {
            if (err) throw err;
            console.log('Connection closed!');
        });
    }
};

module.exports = {
    urlSearch
}
