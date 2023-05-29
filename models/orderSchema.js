const { Schema, model } = require("mongoose");

const mongoose = require('mongoose');


const { handleMongooseError } = require("../utils");

const orderMongooseSchema = new Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    totalPrice: {
        type: Number,
        required: true
    },
    userOrder: [{
        shop: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        }
    }]
}, { versionKey: false });

orderMongooseSchema.post("save", handleMongooseError);

const Order = model("Order", orderMongooseSchema);

module.exports = Order