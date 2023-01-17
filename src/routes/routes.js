const express = require("express");
const defaultController = require("../controllers/defaultController");
const { registerAdmin, loginAdmin } = require("../controllers/authController");

const router = express.Router();

/* Application routes */

//? default route
router.get("/", defaultController)

//? register user api
router.post("/register-user", registerAdmin);

//? login a user
router.post("/login-user", loginAdmin)

module.exports = router;