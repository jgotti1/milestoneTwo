const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const router = require("./routes/citrusProp.js");

const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));

// app.use(express.static("public"));
// dotenv.config();

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
//Route Paths
app.use("/api", router);
app.get("/api/citrus", (req, res) => {
  console.log(res);
  res.send("Hello Citrus Property Managment Site!");
});
const PORT = 5000;
MOSGO_URI = "mongodb+srv://citrusProp:citrusProp321123@cirrusprop.7jtgi.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  // .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Mongo connection is established and running on port: ${PORT} `)))
  .catch((err) => console.log(err.message));
