// const mongoose = require("mongoose");

;
// const connectDB = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(process.env.URI);
//     console.log("Mongo connected");
//     const fe_data= await mongoose.connection.collection("food_items");
//     fe_data.find({}).toArray(function(err,data){
//       if(err) console.log(err);
//       else console.log(data);
//     })
//   } catch (error) {
//     console.log(error);
//     process.exit();
//   }
// }

// module.exports = connectDB;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()
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
