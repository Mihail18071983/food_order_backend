
const Order = require("../models/orderSchema");



const getAllOrders = async (req, res) => {
  const result = await Order.find();
  res.json(result);
};

module.exports = getAllOrders;
