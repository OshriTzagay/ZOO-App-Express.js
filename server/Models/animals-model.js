const mongoose = require("mongoose");

const Animal = new mongoose.Schema(
  {
    AnimalName: { type: String, required: true },
    Birthday: { type: Number, required: true },
    CageNumber: { type: Number, required: true },
    Gender: { type: String, require: true },
    AnimalType: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Animal", Animal);
