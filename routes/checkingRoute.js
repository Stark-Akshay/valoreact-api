const express = require("express");
const router = express.Router();
const { getCheckingUrl } = require("../controllers/checkingController");

//checking url and saving

router.post("/", getCheckingUrl);

module.exports = router;
