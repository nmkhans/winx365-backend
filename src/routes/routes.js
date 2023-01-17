const express = require("express");
const defaultController = require("../controllers/defaultController");
const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

/* Application routes */

//? default route
router.get("/", defaultController)

//? register user api
router.post("/register-user", registerUser);

//? login a user
router.post("/login-user", loginUser)

module.exports = router;