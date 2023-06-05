const express =  require('express');

const sqlRouter = express.Router();
const sqlController = require('../controllers/sql');

//sqlRouter.get("/", async (req, res)=>sqlController.createFunction(req, res));

module.exports = sqlRouter;