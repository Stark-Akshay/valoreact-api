const axios = require("axios");
const { extractID } = require("../utils/extractID");
const { verifyVideo } = require("../utils/verifyVideo");
const Video = require("../models/videoModel");

const getCheckingUrl = async (req, res) => {
  const { url, rank, riotID } = req.body;

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
        /*saving function code start*/
        try {
          const video = await Video.create(req.body);
          res.status(200).json(video);
        } catch (err) {
          res.status(500).json({ success: false, message: err });
        }

        /*saving function code end*/
        // return res.status(200).json({
        //   success: true,
        //   message: "URL is a video",
        //   id: videoID,
        //   url: url,
        // });
      } else {
        return res
          .status(400)
          .json({
            success: false,
            message: "Video is not exist or it is private",
          });
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
