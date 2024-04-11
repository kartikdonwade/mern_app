// const mongoose = require("mongoose");
const url = process.env.URL;
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