const mongoose = require("mongoose");
// uri = "mongodb+srv://shamazmalik963:6zhHEnRvFLuhBkhx@cluster0.lf0zlrk.mongodb.net/ApiAgain?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async (uri) => {
    console.log("mongoose wala function ready.");
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

module.exports = connectDB;