const mongoose = require("mongoose");

const Notification = mongoose.model(
  "Notification",
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "UserId is required",
    },
    message: {
      type: String,
      required: "Notification message is required",
    },
    dateTime: {
      type: Date,
      default: new Date(),
    },
  })
);

module.exports = Notification;
