const mongoose = require("mongoose");

const Transaction = mongoose.model(
  "Transaction",
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "UserId is required",
    },
    type: {
      type: String,
      enum: ["payment", "deposit", "withdraw"],
    },
    amount: {
      type: Number,
    },
    dateTime: {
      type: Date,
      default: new Date(),
    },
  })
);

module.exports = Transaction;
