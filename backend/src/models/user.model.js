const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: String,
    lastname: String,
    phoneno: String,
    email: String,
    password: String,
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 10,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: "Role is required",
    },
  })
);

module.exports = User;
