const express =  require('express');

const articleRouter = express.Router();
const articleController = require('../controllers/articleController')

articleRouter.get('/', async (req, res)=>{
    try{
        const type = req.query.type;
        const articles = await articleController.getArticleByType(type);
        console.log('Articles:', JSON.stringify(articles, null, 2));
        res.json({articles});
    }catch (error){
        console.log("Error: "+error)
    }
})

module.exports = articleRouter;