const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const bookmarkRoutes = require("./controllers/bookmarksControllers.js")
const reviewsRoutes = require('./controllers/reviewsControllers.js')


app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use(logger("dev"));
app.use(cors());

app.use("/bookmarks", bookmarkRoutes);
app.use("/reviews", reviewsRoutes)


// Routes

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

module.exports = app;
