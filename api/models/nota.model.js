const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        maxLength: 500
    },
    date: {
        type: date.now(),
        required: true
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    lawyer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const noteModel = mongoose.model("note", noteSchema)

module.exports = noteModel