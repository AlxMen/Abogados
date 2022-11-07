const router = require('express').Router()

const {
    createNote
} = require("../controllers/note.controller")

const { authUser,authAdmin } = require('../utils')

router.post("/", authUser, authAdmin, createNote)

module.exports = router