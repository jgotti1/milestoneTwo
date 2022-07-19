const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const router = require("./routes/citrusProp.js");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));


app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
//Route Paths
app.use("/api", router);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.get("/api/citrus", (req, res) => {
  console.log(res);
  res.send("Hello Citrus Property Managment Site!");
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Mongo connection is established and running on port: ${process.env.PORT} `)))
  .catch((err) => console.log(err.message));
