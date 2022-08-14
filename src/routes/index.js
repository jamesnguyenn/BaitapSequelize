const express = require("express");

const rootRouter = express.Router();
const likeRoute  = require("./v1/likeRoute");
const rateRoute = require('./v1/ratingRoute');
const orderRoute = require('./v1/orderRoute');

rootRouter.use("/v1/like",likeRoute)
rootRouter.use("/v1/rating",rateRoute)
rootRouter.use("/v1/order",orderRoute)

module.exports = rootRouter;