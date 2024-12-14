const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "sold", "pending"],
    default: "available",
  },
  color: {
    type: String,
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
