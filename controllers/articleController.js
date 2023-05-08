const axios = require('axios');
require('dotenv').config();
const mysql = require('mysql');

const getArticleByType = async (type) => {
    const connection = mysql.createConnection({
        host: '34.129.245.42',
        port: 3306,
        user: 'root',
        password: '012ebecbd6b870d3',
        database: '5120finalproject',
        connectionTimeout: 3000
    });

    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                reject(err);
                return;
            }
            console.log('Connected as id ' + connection.threadId);

            const query = `SELECT * FROM articleNewList WHERE Type = '${type}';`;

            connection.query(query, (err, results) => {
                if (err) {
                    console.error('Error executing query: ' + err.stack);
                    reject(err);
                    return;
                }


                connection.end();

                resolve(results);
            });
        });
    });
};

const getArticleById = async (id)=>{

}

module.exports = {
    getArticleByType,
    getArticleById
}