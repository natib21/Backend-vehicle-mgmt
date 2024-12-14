const express = require("express");
const Car = require("../model/carModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      status: "success",
      cars,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json({
      status: "success",
      newCar,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid data",
      error,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      updatedCar,
    });
  } catch (error) {
    res.status(404).json({
      message: "Car not found",
      error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Car deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: "Car not found",
      error,
    });
  }
});

module.exports = router;
