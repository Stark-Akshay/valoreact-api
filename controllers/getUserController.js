const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const getUserFunc = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password +role");
    if (!user) {
      throw new Error("Sorry this user doesn't exists");
    }
    if (!password) {
      throw new Error("Sorry please provide password");
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      throw new Error("Sorry password is incorrect");
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = getUserFunc;
