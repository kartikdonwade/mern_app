// const mongoose = require("mongoose");
const url =
  "mongodb+srv://kartikdonwade45:MessLocate@cluster0.ylehblf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//   const mongodb = ()=>{
//     mongoose.connect(url , ()=>{
//         console.log("connected");
//     })
//   }
//   module.exports = mongodb;

  const mongoose = require("mongoose");

  const mongodb = async () => {
    try {
      mongoose.set("strictQuery", false);
      mongoose.connect(url);
      console.log("Mongo connected");
    } catch (error) {
      console.log(error);
      process.exit();
    }
  };

  module.exports = mongodb;