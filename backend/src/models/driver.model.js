const mongoose = require("mongoose");

const Driver = mongoose.model(
  "Driver",
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "UserId is required",
    },
    truckno: String,
    dlno: String,
    address: String,
    dateOfReg: {
      type: Date,
      default: new Date(),
    },
  })
);

module.exports = Driver;
