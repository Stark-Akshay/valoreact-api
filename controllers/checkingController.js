const { extractID } = require("../utils/extractID");
const { verifyVideo } = require("../utils/verifyVideo");
const Video = require("../models/videoModel");

const saveVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = saveVideo;
