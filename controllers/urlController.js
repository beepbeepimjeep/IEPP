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
    //domain = domain.replace(pattern1, "");
    //domain = domain.replace(pattern2, "");
    const regex1 = RegExp(pattern1);
    const regex2 = RegExp(pattern2);
    console.log("domain after replace: "+domain);
    if((regex1.test(domain)&&domain.length<17)||(regex2.test(domain)&&domain.length<18)||(domain.length<10)){
        try{
            const results = await Promise.all([
                [],
                [],
                axios.get(`https://webrisk.googleapis.com/v1/uris:search?threatTypes=MALWARE&uri=${domain}&key=${process.env["GOOGLE_LOOKUP_API"]}`)
                    .then(response => {
                        return response.data;
                    })
                    .catch(error => {
                        console.log(error);
                        return [];
                    })
            ]);
            connection.end((err)=>{
                if(err) throw err;
                console.log("Line 40, connection pool close")
            })
            console.log(results);
            return results;
        }catch (error) {
            console.log(error);
            throw new Error('Internal server error');
        }
    }else{
        try {
            const results = await Promise.all([
                new Promise((resolve, reject) => {
                    connection.query(`SELECT * FROM collectionURL WHERE urlLink LIKE '%${domain}%' `, (err, results) => {
                        if (err) reject(err);
                        else resolve(results);
                    });
                }),
                new Promise((resolve, reject) => {
                    connection.query(`SELECT * FROM maliciousURL WHERE urlLink LIKE '%${domain}%' LIMIT 5`, (err, results) => {
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
            connection.end((err)=>{
                if(err) throw err;
                console.log("Line 74, connection pool close")
            })
            console.log(results);
            return results;
        } catch (error) {
            console.log(error);
            throw new Error('Internal server error');
        }
    }
};

module.exports = {
    urlSearch
}
