// Middleware for validating the URL
const validateURL = (req, res, next) => {
  // console.log("inside url middleware");
  const { url } = req.body;
  if (!url) {
    return res
      .status(400)
      .json({ success: false, message: "URL is required!" });
  }
  next();
};

module.exports = validateURL;
