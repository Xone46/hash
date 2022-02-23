const mongoose = require("mongoose");
const ObservationSchema = new mongoose.Schema({

    clientId : {
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
    message: {
        type: String,
        required: false,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required: false,
    },
    lu : {
        type : Boolean,
        default : false,
        required : false,
    }

});
const Observation = mongoose.model("Observation", ObservationSchema);
module.exports = Observation;