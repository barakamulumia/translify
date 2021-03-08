const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: "UserId is required",
  },
  photo: {
    type: Buffer,
    required: "Profile photo is required",
  },
});

PhotoSchema.methods.toJSON = function () {
  const result = this.toObject();
  delete result.photo;
  return result;
};

module.exports = mongoose.model("Photo", PhotoSchema);
