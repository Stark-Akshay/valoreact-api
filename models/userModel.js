const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  //build schema
  ign: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, select: false },
  role: { type: String, default: "user" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
