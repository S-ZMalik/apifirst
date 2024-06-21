require("dotenv").config();

const connectDB = require("./db/connect.js");

const Product = require("./model/product.js");

const ProductJson = require("./product.json");

const startProduct = async () => {
  console.log("product start start");

  try {
      await connectDB(process.env.MONGODB_URI);
      await Product.deleteMany();
      await Product.create(ProductJson);
    console.log("product connected succesfully");
  } catch (error) {
    console.log("product is no connected", error);
  }
};

startProduct();
