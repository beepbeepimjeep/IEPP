const axios = require('axios');
require('dotenv').config();
const mysql = require('mysql');

const fakeNewChecker = async (news)=>{
    const claim = news;
    const claimLength = claim.length;
    const apiKey = process.env["GOOGLE_LOOKUP_API"];
    const connection = mysql.createConnection({
        host: '34.129.14.82',
        port: 3306,
        user: 'root',
        password: '012ebecbd6b870d3',
        database: '5120finalproject',
        connectionTimeout: 3000
    });
    // check db first, if the result is null, then check api
    try {
        const resultDb = await new Promise((resolve, reject) => {
            connection.query(`SELECT *, 
                                SOUNDEX('${claim}') AS input_soundex, 
                                SOUNDEX(article_title) AS article_title_soundex, 
                                (SOUNDEX('${claim}') = SOUNDEX(article_title)) AS soundex_similarity,
                                levenshtein('${claim}', article_title) AS levenshtein_similarity,
                                (levenshtein('${claim}', article_title) + 100 * SOUNDEX(article_title)) AS combined_score
                               FROM FackNews 
                               WHERE (levenshtein('${claim}', article_title) + 100 * SOUNDEX(article_title)) > 150
                               ORDER BY combined_score DESC
                               LIMIT 2;`, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });

        })
        if (resultDb.length> 0) {
            return resultDb;
        } else {
            try {
                const languageCode = 'en';
                const response = await axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${apiKey}&query=${claim}&languageCode=${languageCode}`);
                return response.data;
            } catch (error) {
                console.log(error);
                return [];
            }
        }
    } catch (error) {
        console.log("Error: " + error);
        return null;
    }


    /*try{
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
    }*/

}

module.exports = {
    fakeNewChecker
}