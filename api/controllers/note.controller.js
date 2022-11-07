const note = require('../models/note.model')

function createNote(req, res) {
    note.create(req.body)
        .then(note => res.json(note))
        .catch(err => res.json(err))
}

module.exports = {
    createNote
}