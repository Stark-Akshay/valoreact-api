const { extractID } = require("../utils/extractID");

// Middleware for extracting the video ID
const extractVideoID = (req, res, next) => {
  const { url } = req.body;
  const videoID = extractID(url);
  if (!videoID) {
    return res
      .status(400)
      .json({ success: false, message: "URL is not a YouTube link" });
  }
  req.videoID = videoID; // Storing the extracted ID for the next middleware
  next();
};

module.exports = extractVideoID;
