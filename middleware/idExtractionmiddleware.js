const { extractID } = require("../utils/extractID");

// Middleware for extracting the video ID
const extractVideoID = (req, res, next) => {
  const { url } = req.body;
  const videoID = extractID(url);
  if (!videoID) {
    return res.status(400).json({
      success: false,
      message:
        "Please provide the full Youtube URL. Eg: https://www.youtube.com/watch?v=fUsaDm9nNkY",
    });
  }
  req.videoID = videoID; // Storing the extracted ID for the next middleware
  next();
};

module.exports = extractVideoID;
