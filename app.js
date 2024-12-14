const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const carRoute = require("./router/carRoute");
dotenv.config({ path: "./config.env" });
const app = express();
const corsOptions = {
  origin: process.env.CLIENT_URL || "*",
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("Hello");
  next();
});
app.use("/api/car", carRoute);

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Monogo Db Connected Successfully !!!");
});

module.exports = (req, res) => {
  app(req, res); // Pass the Express app to Vercel to handle requests
};
