const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../utils");


const foodSchema = new Schema(
  {
    shop: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    wallpaper: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    products: [
      {
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        id: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { versionKey: false }
);



foodSchema.post("save", handleMongooseError);


const Food = model("Food", foodSchema, "food");

module.exports = Food;
