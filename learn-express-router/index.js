// define express init
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// define port
const port = 3000;

// define middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// define routes
app.use("/admin", require("./routes/admin"));
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

// define server
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
