const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        maxLength: 500
    },
    day: {
        type: Date,
        default: Date.now()
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
    }
})

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel