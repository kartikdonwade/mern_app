const express = require("express");
const app = express();
const port = 5000;
const mongodb = require("./db");
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const router = require("./Routes/CreateUser");

app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
  console.log("Hi");
  res.status(200).send("In index");
})




//database
mongodb().then(() => {
  app.listen(port, () => {
    console.log(` app listening on port ${port}`);
  });
});
