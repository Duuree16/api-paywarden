const mongoose = require("mongoose");
require("dotenv").config();

const URI = "mongodb+srv://durenba123:Db86778877@mycluster1.kgxqeip.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(URI);
    console.log("🔥🔥🔥 Successfully connected to DataBase 🔥🔥🔥");
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = connect;