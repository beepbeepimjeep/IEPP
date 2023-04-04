const express = require('express')

const urlSearchRouter = express.Router();
const urlController = require('../controllers/urlController');

urlSearchRouter.get("/:url", async (req, res)=>{
    try {
        const result = await urlController.urlSearch(req, res);
        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = urlSearchRouter;