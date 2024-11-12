const { extractID } = require("../utils/extractID");
const { verifyVideo } = require("../utils/verifyVideo");
const Video = require("../models/videoModel");

// Middleware for verifying the video
const verifyVideoMiddleware = async (req, res, next) => {
  try {
    const verifiedStatus = await verifyVideo(req.videoID);
    if (!verifiedStatus) {
      return res.status(400).json({
        success: false,
        message: "Video does not exist or is private",
      });
    }
    next();
  } catch (err) {
    console.error("Error verifying video:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error during verification",
    });
  }
};

const saveVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = saveVideo;
