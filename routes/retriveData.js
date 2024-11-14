const express = require("express");
const retriveOne = require("../controllers/retriveDataController");
const router = express.Router();

//checking url and saving

router.get("/", retriveOne);

module.exports = router;
