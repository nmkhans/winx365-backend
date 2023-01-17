const express = require("express");
const defaultController = require("../controllers/defaultController");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

/* Application routes */

//? default route
router.get("/", defaultController)

//? register user api
router.post("/register-user", registerUser);

module.exports = router;