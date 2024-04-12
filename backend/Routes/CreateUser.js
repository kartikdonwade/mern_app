const express = require("express");
const router = express.Router();
const user = require("../models/user");
const { body, validationResult } = require("express-validator");


router
  .route("/")
  .post(
    [
      body("email", "Please enter valid email").isEmail(),
      body("name").isLength({ min: 5 }),
      body("password").isLength({ min: 5 }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      try {
        //console.log("Router");
        //res.status(200).send("Router");
        user.create({
          name: "Kart Donwade",
          location: "Qwerty edrefef",
          email: "kartik.donwade21@gmail.com",
          password: "123456",
        });

        res.json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: error.message });
      }
    }
  );

module.exports = router;