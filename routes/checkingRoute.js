const express = require("express");
const router = express.Router();
const saveVideo = require("../controllers/checkingController");
const verifyRiotID = require("../middleware/verifyRiotIDmiddleware");
const validateURL = require("../middleware/validateURL");
const extractVideoID = require("../middleware/idExtractionmiddleware");
const verifyVideoMiddleware = require("../middleware/verifyVideoMiddleware");
const verifyRank = require("../middleware/rankCheckMiddleware");

//checking url and saving

router.post(
  "/",
  verifyRank,
  verifyRiotID,
  validateURL,
  extractVideoID,
  verifyVideoMiddleware,
  saveVideo
);

module.exports = router;
