const express = require("express");
const router = express.Router();
const saveVideo = require("../controllers/checkingController");
const verifyRiotID = require("../middleware/verifyRiotIDmiddleware");
const validateURL = require("../middleware/validateURL");
const extractVideoID = require("../middleware/idExtractionmiddleware");
const verifyVideoMiddleware = require("../middleware/verifyVideoMiddleware");

//checking url and saving

router.post(
  "/",
  verifyRiotID,
  validateURL,
  extractVideoID,
  verifyVideoMiddleware,
  saveVideo
);

module.exports = router;
