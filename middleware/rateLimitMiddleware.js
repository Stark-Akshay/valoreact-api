const Video = require("../models/videoModel");
const rateLimitMiddleware = async (req, res, next) => {
  const documentCount = await Video.countDocuments();

  if (documentCount >= 50) {
    return res.status(400).json({
      success: false,
      message:
        "Sorry, the limit has been reached for uploads. Please try again later!",
    });
  }
  next();
};

module.exports = rateLimitMiddleware;
