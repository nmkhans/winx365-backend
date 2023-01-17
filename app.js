const express = require("express");
require("dotenv").config();
const router = require("./src/routes/routes");
const cors = require("cors");

//? App confuguration
const app = express();
app.use(cors());
app.use(express.json())

//? handle routes
app.use("/api/v1", router);

//? handle undefined routes
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route was not round!"
    })
});

module.exports = app;