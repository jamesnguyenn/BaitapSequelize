const express = require("express");

const likeRoute = express.Router();

const likeController = require("../../controller/likeController")

likeRoute.get('/getLike', likeController.getLike);

likeRoute.get('/likeAction',likeController.likeAction)


module.exports = likeRoute;