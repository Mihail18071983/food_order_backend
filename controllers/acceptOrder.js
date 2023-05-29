const uniqid = require("uniqid");

const httpError = require("../helpers/httpError");

const { User } = require("../models/customerSchema");

const Order = require("../models/orderSchema");


const { userJoiSchema } = require("../models/customerSchema");


const acceptOrder = async (req, res, next) => {
  const { error } = userJoiSchema.validate(req.body);
  if (error) {
    throw httpError(400, error.message);
  }

  const userId = uniqid();
  const orderId = uniqid();
  const identificatedUser = { ...req.body, userId };
  const identificatedOrder = { ...req.body, orderId };

  const user = new User(identificatedUser);
  const order = new Order(identificatedOrder);
  await user.save();
  await order.save();

  res.send({ message: `Order is accepted`, number: orderId });
};

module.exports = acceptOrder;
