const Food = require("../models/foodSchema");

const getAllProducts = async (req, res) => {
  const allproducts = await Food.find();
  res.json(allproducts);
};

module.exports = getAllProducts;
