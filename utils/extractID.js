//checking url is youtube if yes extract ID

const extractID = (url) => {
  // var regExp =
  //   /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  // var match = url.match(regExp);
  // if (url.includes("youtube.com") && match && match[2].length == 11) {
  //   return match[2];
  // }

  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  // console.log(`original url: ${url}`);
  // console.log(`parsed url: ${match[7]}`);
  if (match && match[7].length == 11) {
    return match[7];
  } else {
    return false;
  }
};

module.exports = {
  extractID,
};
