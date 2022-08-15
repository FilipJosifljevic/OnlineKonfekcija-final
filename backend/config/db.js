require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Successfully connected to the Database!");
    } catch (error) {
        console.error("MongoDB connection failed!," + error);
        process.exit(1);
    }
}

module.exports = connectDB;