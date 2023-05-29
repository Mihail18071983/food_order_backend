const acceptOrder = require("./acceptOrder");
const getAllProducts = require("./getAllProducts");
const getAllOrders = require("./getAllOrders");


const { ctrlWrapper } = require("../utils");

module.exports = {
    acceptOrder:ctrlWrapper(acceptOrder),
    getAllProducts:ctrlWrapper(getAllProducts),
    getAllOrders:ctrlWrapper(getAllOrders),
}