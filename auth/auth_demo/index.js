const express = require("express");
const app = express();
const User = require("./models/user");

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/admin", (req, res) => {
  res.send("Halaman admin hanya bisa diakses jika kamu login!");
});

app.listen(3000, () => {
  console.log("app listening on port http://localhost:3000");
});
