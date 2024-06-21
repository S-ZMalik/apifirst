const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "price must be added"],
  },
  featured: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.8,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "sumsung", "berry", "vivo", "del", "hp", "Qmobile"],
      message: `Value is no supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
