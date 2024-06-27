const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");

mongoose
  .connect("mongodb://127.0.0.1/auth_demo")
  .then((result) => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({
    username,
    password: hashedPassword,
  });
  await user.save();
  res.redirect("/");
});

app.get("/admin", (req, res) => {
  res.send("Halaman admin hanya bisa diakses jika kamu login!");
});

app.listen(3000, () => {
  console.log("app listening on port http://localhost:3000");
});
