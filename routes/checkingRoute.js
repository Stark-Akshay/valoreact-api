const express = require("express");
const router = express.Router();
const saveVideo = require("../controllers/checkingController");
const verifyRiotID = require("../middleware/verifyRiotIDmiddleware");
const validateURL = require("../middleware/validateURL");
const extractVideoID = require("../middleware/idExtractionmiddleware");
const verifyVideoMiddleware = require("../middleware/verifyVideoMiddleware");
const verifyRank = require("../middleware/rankCheckMiddleware");
const rateLimitMiddleware = require("../middleware/rateLimitMiddleware");

//checking url and saving

router.post(
  "/",
  rateLimitMiddleware,
  verifyRank,
  verifyRiotID,
  validateURL,
  extractVideoID,
  verifyVideoMiddleware,
  saveVideo
);

module.exports = router;
