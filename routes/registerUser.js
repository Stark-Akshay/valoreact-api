const express = require("express");
const registerUserFunc = require("../controllers/registerController");
//import controller

const router = express.Router();

//checking url and saving

router.post("/", registerUserFunc);

module.exports = router;
