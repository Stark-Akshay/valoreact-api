const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  //build schema
  url: {
    type: String,
    required: [true, "Please enter the video link"],
  },
  rank: {
    type: String,
    required: [true, "Please provide a rank"],
  },
  riotID: {
    type: String,
    required: [true, "Please provide Riot ID"],
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
