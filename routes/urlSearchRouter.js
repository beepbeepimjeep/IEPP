const express = require('express')

const urlSearchRouter = express.Router();
const urlController = require('../controllers/urlController');

urlSearchRouter.get("/:url", urlController.urlSearch);


module.exports = urlSearchRouter;