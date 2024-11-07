const { default: axios } = require("axios");

const verifyVideo = async (id) => {
  var imgUrl = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
  var response = await axios.head(imgUrl);
  if (response.status == 200) {
    return true;
  }
  return false;
};

module.exports = {
  verifyVideo,
};
