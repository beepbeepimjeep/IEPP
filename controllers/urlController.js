const axios = require('axios');
const mysql = require('mysql');

require('dotenv').config();

const urlSearch = async (domain) => {
    const connection = mysql.createPool({
        host: '34.129.245.42',
        port: 3306,
        user: 'root',
        password: '012ebecbd6b870d3',
        database: '5120finalproject',
        connectionLimit: 10,
        connectionTimeout: 3000
    });
    const pattern1 = "http://";
    const pattern2 = "https://";
    const regex1 = RegExp(pattern1);
    const regex2 = RegExp(pattern2);
    console.log("domain after replace: " + domain);
    const url = 'http://34.129.245.42:5000/api/url_check';
    const data = {
        url: domain
    };

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM maliciousURL WHERE urlLink LIKE '%${domain}%' LIMIT 5`, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        connection.end((err) => {
            if (err) throw err;
            console.log("Line 74, connection pool close");
        });

        if (results.length > 0) {
            console.log(results);
            return results;
        } else {
            console.log("Nothing in it");
            const api = await axios.post(url, data);
            console.log(api.data.result);
            const result = [{
                urlMaliciousId: 1,
                urlLink: domain,
                urlType: api.data.result
            }];
            console.log(result);
            return result;
        }
    } catch (error) {
        console.log(error);
        throw new Error('Internal server error');
    }
};


module.exports = {
    urlSearch
}
