const router = require('express').Router()

const {
    getAllClients
} = require("../controllers/user.controller")

const { authUser, authLawyer } = require('../utils')



router.get("/clients",authUser, authLawyer, getAllClients)
// router.get("/:id/notes/:clientId")
// router.put("/:id/appointments/:appointmentId")
// router.delete("/:id/appointments")
// router.delete("/:id/notes/:noteId")

module.exports = router;