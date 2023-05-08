const express = require('express');

const chatRouter = express.Router();
const chatController = require('../controllers/chatController');
chatRouter.get('/', async (req,res)=>{
    const message = {}
    try{
        const response = await chatController.chatFunction(message);
        res.json({response});
    }catch (e){
        console.log("Error: " + e);
    }
})

module.exports = chatRouter;
