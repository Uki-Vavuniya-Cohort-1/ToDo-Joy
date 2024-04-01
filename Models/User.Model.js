const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  note: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
