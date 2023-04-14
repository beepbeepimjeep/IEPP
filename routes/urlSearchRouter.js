const express = require('express')

const urlSearchRouter = express.Router();
const urlController = require('../controllers/urlController');

urlSearchRouter.get("/", async (req, res)=>{
    try {
        const domain = req.query.domain;
        const result = await urlController.urlSearch(domain);
        res.json({ result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = urlSearchRouter;