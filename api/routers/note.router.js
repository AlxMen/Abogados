const router = require('express').Router()

const {
    createNote,
    getNotes,
    getNotesOneClients,
    deleteNote
} = require("../controllers/note.controller")

const { authUser,authLawyer } = require('../utils')

router.post("/", authUser, authLawyer, createNote)
router.get("/", authUser, authLawyer, getNotes)
router.get("/:clientId", authUser, authLawyer, getNotesOneClients)
router.delete("/:notesId", authUser, authLawyer, deleteNote )


module.exports = router