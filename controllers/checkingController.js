const axios = require("axios");
const { extractID } = require("../utils/extractID");
const { verifyVideo } = require("../utils/verifyVideo");

const getCheckingUrl = async (req, res) => {
  const url = req.body.url;

  //validation
  if (!url) {
    return res.status(400).json({ success: false, message: "URL is required" });
  }

  try {
    //extracting ID from the url
    const videoID = extractID(url);
    if (videoID) {
      const verifiedStatus = await verifyVideo(videoID);
      if (verifiedStatus) {
        return res
          .status(200)
          .json({ success: true, message: "URL is a video", id: videoID });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "URL is not a video" });
      }
    } else {
      return res
        .status(400)
        .json({ success: false, message: "URL is not a youtube link" });
    }
  } catch (err) {
    console.log("catch all");
    console.log(err);
  }
};

module.exports = {
  getCheckingUrl,
};
