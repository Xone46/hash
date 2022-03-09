const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({

    nom : {
        type: String,
        required: false,
        trim: true,
    },
    prenom: {
        type: String,
        required: false,
        trim: true,
    },
    telephone: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        required: false,
        trim: true,
    },

    message : {
        type: String,
        required: false,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: false,
    },

});
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;