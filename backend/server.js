import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import citrusPropRoutes from "./routes/citrusProp.js";

const app = express();
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
dotenv.config();

//Route Paths
app.use("/citrus", citrusPropRoutes);
app.get("/", (req, res) => {
  res.send("Hello Citrus Property Managment Site!");
});

mongoose
<<<<<<< HEAD
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // .connect(CONNECTION_URL)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(
        `Mongo connection is established and running on port: ${process.env.PORT} `
      )
    )
  )
=======
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  // .connect(CONNECTION_URL)
  .then(() => app.listen(process.env.PORT, () => console.log(`Mongo connection is established and running on port: ${process.env.PORT} `)))
>>>>>>> 023048220222a019de4ba4d2c0fdd70593c36f5b
  .catch((err) => console.log(err.message));
