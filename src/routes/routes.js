const express = require("express");
const defaultController = require("../controllers/defaultController");
const {
    registerAdmin,
    loginAdmin
} = require("../controllers/authController");
const { addAgent, getAgents } = require("../controllers/agentController");

const router = express.Router();

/* Application routes */

//? default route
router.get("/", defaultController)

//? register admin api
router.post("/register-user", registerAdmin)

//? login admin api
router.post("/login-user", loginAdmin)

//? add agent api
router.post("/add-agent", addAgent)

//? get all agents api
router.get("/get-agents", getAgents)

module.exports = router;