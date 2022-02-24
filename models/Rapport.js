const mongoose = require("mongoose");
const year = new Date()
const RapportSchema = new mongoose.Schema({

    referenceRapport : {
        type: String,
        required: false,
        trim: true,
    },
    designation: {
        type: String,
        required: false,
        trim: true,
    },
    dateIntervention: {
        type: String,
        required: false,
    },
    responsableClient: {
        type: String,
        required: false,
        trim: true,
    },
    dateProductionControle: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: new Date(),
        required: false,
    },
    pdfPath : {
        type: String,
        required: true,
        required: true,
        trim: false,

    },
    filename : {
        type: String,
        required: true,
        trim: true,
    },
    originalname : {
        type: String,
        required: true,
        trim: true,
    },
    size : {
        type: Number,
        required: true,
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Client',
        required: true,
    },
    category : {
        type: String,
        required: true,
        trim: true,
    },
    

});
const Rapport = mongoose.model("Rapport", RapportSchema);
module.exports = Rapport;