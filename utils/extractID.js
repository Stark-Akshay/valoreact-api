const extractID = (url) => {
  var regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (url.includes("youtube.com") && match && match[2].length == 11) {
    return match[2];
  } else {
    return false;
  }
};

module.exports = {
  extractID,
};
