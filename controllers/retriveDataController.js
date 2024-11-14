const Video = require("../models/videoModel");

const retriveOne = async (req, res) => {
  const dataOne = await Video.findOne();
  if (dataOne == null) {
    return res
      .status(400)
      .json({ success: false, message: "Sorry No more videos!" });
  }
  return res.status(200).json(dataOne);
};

module.exports = retriveOne;
