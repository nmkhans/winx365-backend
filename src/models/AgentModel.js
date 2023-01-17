const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true 
    }, 
    whatsappUrl: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }

}, {versionKey: false, timestamps: true});

const Agent = mongoose.model("agent", schema);
module.exports = Agent;