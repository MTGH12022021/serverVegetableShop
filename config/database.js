const env = require("dotenv");
const mongoose = require("mongoose");

//set up mongoose
mongoose.set('strictQuery', false);

async function connectMongoose() {
    try {
        await mongoose.connect(
            "mongodb+srv://admin-Loi:Han12022021@cluster0.cdpzsch.mongodb.net/VegatableShop?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => {
                console.log("Connected to MongoDB");
            }
        );
    }
    catch (e) {
        console.log("Disconnect to mongoDB");
    }
}

module.exports = { connectMongoose };
