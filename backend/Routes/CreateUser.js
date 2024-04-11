const express = require('express');
const router  = express.Router()
const user = require('../models/user')

router.post("/createuser", async (req, res) => {
  try {
     user.create({
      name: "Kartik Donwade",
      location: "Qwerty edrefef",
      email: "kartik.donwade21@gmail.com",
      password: "123456",
    });
    const result= await user.save();
    console.log(result);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;