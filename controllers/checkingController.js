const { extractID } = require("../utils/extractID");
const { verifyVideo } = require("../utils/verifyVideo");
const Video = require("../models/videoModel");

const saveVideo = async (req, res) => {
  const data = {
    url: req.videoID,
    rank: req.body.rank,
    riotID: req.body.riotID,
  };
  // console.log(data);
  try {
    const video = await Video.create(data);
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = saveVideo;
