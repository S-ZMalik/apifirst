const express =  require("express");

const app = express();

// env ko import kr ra hu 
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

const connectDB = require("./db/connect.js");

// midleware
const products_router = require("./routers/products");

app.get("/", (req, res) => {
    res.send("My name is Shamaz");
})


// midleware
app.use("/api/products", products_router);

const serverStart = async () => {
    try {
        await connectDB(uri);
        app.listen(PORT, () => {
            console.log(`the server is running ${PORT}.`);
        })
    } catch (error) {
        console.log("ERROR:", error);
    }
}
serverStart();