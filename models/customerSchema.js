const { Schema, model } = require("mongoose");

const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const userMongooseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

userMongooseSchema.post("save", handleMongooseError);

const userJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  adress: Joi.string().required(),
  totalPrice: Joi.number().required(),
  userOrder: Joi.array().required(),
});

const User = model("User", userMongooseSchema, 'users');

module.exports = {
  User,
  userJoiSchema,
  userMongooseSchema,
};
