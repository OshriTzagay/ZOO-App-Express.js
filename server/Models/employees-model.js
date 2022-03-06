const mongoose = require("mongoose");

const Employee = new mongoose.Schema(
  {
    FirstName: { type: String, required: true },
    Role: { type: String, required: true },
    Email: { type: String, required: true },
    Phone: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", Employee);
