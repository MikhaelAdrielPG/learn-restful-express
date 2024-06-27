const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("middleware pertama");
  next();
  console.log("middleware pertama setelah next");
});

app.use((req, res, next) => {
  console.log("middleware kedua");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/halaman", (req, res) => {
  res.send("Hello, halaman!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
