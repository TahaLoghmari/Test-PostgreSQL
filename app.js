// Setup
const path = require("node:path");
const express = require("express");
const app = express();
const usersRouter = require("./routes/usersRouter");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Real App
