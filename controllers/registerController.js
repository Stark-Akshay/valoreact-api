const User = require("../models/userModel");

const registerUserFunc = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("User already exists");
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      message: "User has been registered successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = registerUserFunc;
