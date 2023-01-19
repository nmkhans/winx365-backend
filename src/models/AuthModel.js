const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "admin"
    },
    password: {
        type: String,
        required: true
    }

}, {versionKey: false, timestamps: true})

const Auth = mongoose.model("auth", schema);
module.exports = Auth;