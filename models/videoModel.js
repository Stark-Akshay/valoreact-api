const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  //build schema
  url: {
    type: String,
    required: [true, "Please enter the video link"],
    unique: [true, "Sorry this video already exists in the view list"],
  },
  rank: {
    type: String,
    required: [true, "Please provide a rank"],
  },
  riotID: {
    type: String,
    required: [true, "Please provide Riot ID"],
    unique: [true, "Sorry this ID has already submited one clip"],
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
