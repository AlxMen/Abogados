const Note = require('../models/note.model')

function createNote(req, res) {
    Note.create(req.body)
        .then(note => {
            User.findById(req.body.lawyer)
                .then(user => {
                    user.admininfo.register.push(note._id)
                    user.save()
                })
                .catch(err => res.json(err))
            res.json(note)
        })
        .catch(err => res.json(err))
}


module.exports = {
    createNote
}