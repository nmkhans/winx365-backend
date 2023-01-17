const express = require("express");
const defaultController = require("../controllers/defaultController");

const router = express.Router();

/* Application routes */

//? default route
router.get("/", defaultController)

module.exports = router;