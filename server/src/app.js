require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");
const auth = require("./routes/auth");
const track = require("./routes/track");

const app = express();

app.use(bodyParser.json());
app.use(auth);
app.use(track);

const mongoUri =
  "mongodb+srv://baotq:D5IFMEPaipzMOsWV@cluster0.qurnyry.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

module.exports = app;
