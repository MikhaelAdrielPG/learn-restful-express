// define express init
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// define port
const port = 3000;

// define middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("secret-key"));

// define routes
app.get("/signingcookie", (req, res) => {
  res.cookie("paket", "ransel", { signed: true });
  res.send("signed cookie");
});

app.get("/verifycookie", (req, res) => {
  const cookies = req.signedCookies;
  res.send(cookies);
});

app.use("/admin", require("./routes/admin"));
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

// define server
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
