const express = require('express');

const chatRouter = express.Router();
const chatController = require('../controllers/chatController');
chatRouter.post('/', async (req,res)=>{
    console.log("line 6");
    const message = req.body.message;
    try{
        const response = await chatController.chatFunction(message);
        res.json({response});
    }catch (e){
        console.log("Error: " + e);
    }
})

module.exports = chatRouter;
