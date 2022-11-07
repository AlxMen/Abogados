const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
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
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    lawyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
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

const appointmentModel = mongoose.model("appointment", appointmentSchema)

module.exports = appointmentModel