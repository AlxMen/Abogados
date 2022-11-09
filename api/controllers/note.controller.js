const Note = require('../models/note.model')

async function createNote(req, res) {
    try {
        const note = await Note.create({lawyer: res.locals.user.id, ...req.body})
        res.json(note)
    } catch (error) {
        res.json(error)
    }
}

async function getNotes(req, res) {
    try {
        const notes = await Note.find({lawyer: res.locals.user.id})
        res.json(notes)
    } catch (error) {
        res.json(error)
    }
}

async function getNotesOneClients(req, res) {
    try {
        const notes = await Note.find({lawyer: res.locals.user.id, client: req.params.clientId})
        res.json(notes)
    } catch (error) {
        res.json(error)
    }
}

async function deleteNote (req, res) {
    try {
        const notes = await Note.findByIdAndDelete(req.params.notesId)
        res.json(notes)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createNote,
    getNotes,
    getNotesOneClients,
    deleteNote
}