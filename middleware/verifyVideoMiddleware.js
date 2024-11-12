const { verifyVideo } = require("../utils/verifyVideo");

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

module.exports = verifyVideoMiddleware;
