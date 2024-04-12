const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected!");
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data = await fetched_data.find({}).toArray();
    // console.log(data);
  } catch (error) {
    console.log("err: ", error);
  }
};

module.exports = mongoDB;
