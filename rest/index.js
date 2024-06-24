const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: 1,
    username: "Michael",
    text: `Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way`,
  },
  {
    id: 2,
    username: "Kelly",
    text: `I talk a lot, so I’ve learned to tune myself out`,
  },
  {
    id: 3,
    username: "Kevin",
    text: `I JUST WANT TO LIE ON THE BEACH AND EAT HOT DOGS.`,
  },
  {
    id: 4,
    username: "Dwight",
    text: `IDENTITY THEFT IS NOT A JOKE, JIM! MILLIONS OF FAMILIES SUFFER EVERY YEAR.`,
  },
  {
    id: 5,
    username: "Ryan",
    text: `I’M SUCH A PERFECTIONIST THAT I'D KINDA RATHER NOT DO IT AT ALL THAN DO A CRAPPY VERSION.`,
  },
  {
    id: 6,
    username: "Jim",
    text: `EVERYTHING I HAVE I OWE TO THIS JOB… THIS STUPID, WONDERFUL, BORING, AMAZING JOB.`,
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/order", (req, res) => {
  res.send("GET order response");
});

app.get("/comments/create", (req, res) => {
  res.render("comments/create");
});

app.post("/comments", (req, res) => {
  const { username, text } = req.body;
  comments.push({ username, text });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === parseInt(id));
  res.render("comments/show", { comment });
});

app.post("/order", (req, res) => {
  const { item, qty } = req.body;
  res.send(`Item: ${item} - Qty: ${qty}`);
});

app.listen(8080, () => {
  console.log(`Server is running: http://localhost:8080`);
});
