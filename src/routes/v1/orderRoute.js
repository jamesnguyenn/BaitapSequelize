const express = require("express");

const orderRoute = express.Router();

const orderController = require("../../controller/orderController")

orderRoute.post('/createOrder', orderController.createOrder);

module.exports = orderRoute;