const express = require("express");

const rateRoute = express.Router();

const ratingController = require("../../controller/ratingController")

rateRoute.get('/getRating', ratingController.getRating);
rateRoute.get('/ratingAction', ratingController.ratingAction);

module.exports = rateRoute;