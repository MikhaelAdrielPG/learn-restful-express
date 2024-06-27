const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { user = "No-name", token = "" } = req.cookies;
  res.send(`Hello ${user}, your token is ${token}`);
});

router.get("/create", (req, res) => {
  res.send("theater create");
});

router.post("/", (req, res) => {
  res.send("theater store");
});

router.get("/:id", (req, res) => {
  res.send("theater show");
});

router.put("/:id", (req, res) => {
  res.send("theater update");
});

router.delete("/:id", (req, res) => {
  res.send("theater delete");
});

module.exports = router;
