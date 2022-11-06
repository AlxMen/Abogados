const mongoose = require('mongoose')

const citaSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    modality: {
        type: String,
        enum: ['call', 'presence'],
        required: true
    },
    ambit: {
        type: String,
        enum: ['laboral', 'civil', 'penal', 'mercantil', 'administrativo', 'fiscal', 'otros'],
        required: true
    },
    nameclient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    namelawyer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    message: {
        type: String,
        maxLength: 200,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

const citaModel = mongoose.model("cita", citaSchema)

module.exports = citaModel