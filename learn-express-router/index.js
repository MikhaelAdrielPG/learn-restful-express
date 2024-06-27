// define express init
const express = require("express");
const app = express();

// define port
const port = 3000;

// define middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define routes
app.use("/theater", require("./routes/theater"));
app.use("/movies", require("./routes/movies"));

// define server
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
