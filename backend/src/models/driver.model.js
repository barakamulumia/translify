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
    address: {
      place_name: String,
      place_id: String,
    },
    dateOfReg: {
      type: Date,
      default: new Date(),
    },
    authourization: {
      status: {
        type: String,
        enum: ["Pending", "Declined", "Approved"],
        default: "Pending",
      },
      token: {
        type: String,
        default: "",
      },
    },
  })
);

module.exports = Driver;
