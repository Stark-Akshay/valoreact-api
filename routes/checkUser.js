const express = require("express");
const getUserFunc = require("../controllers/getUserController");
//make controller for checcking
const router = express.Router();

//checking url and saving

router.post("/", getUserFunc);

module.exports = router;
