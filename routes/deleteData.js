const express = require("express");

const router = express.Router();
const deleteData = require("../controllers/deleteDataController");

//checking url and saving

router.delete("/:id", deleteData);

module.exports = router;
