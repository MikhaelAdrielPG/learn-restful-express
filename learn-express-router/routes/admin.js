const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("you are not admin");
});

router.get("/", (req, res) => {
  res.send("administrator");
});

module.exports = router;
