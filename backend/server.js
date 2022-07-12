"use strict";
import "dotenv/config";
import express from "express";
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT);
console.log("lisntening on PORT 5000!");
console.log("connected to mongo: ", process.env.MONGO_URI);
