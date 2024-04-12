const express = require("express");
const app = express();
const port = 5000;
const mongodb = require("./db");
const router = require("./Routes/CreateUser");

app.use(express.json());
app.use("/api/user", router);
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
