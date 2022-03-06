const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    UserName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
