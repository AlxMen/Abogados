const router = require('express').Router()

const {
    getFutureAppointments,
    getAllAppointments,
    getNotes
} = require("../controllers/user.controller")

const { authUser, authAdmin } = require('../utils')

router.get("/:id/appointments", authUser, getFutureAppointments)
router.get("/:id/appointmentAD", authUser, authAdmin, getAllAppointments)
router.get("/:id/notes", authUser, authAdmin, getNotes)
// router.get("/:id/appointment/:clientId")
// router.get("/:id/clients")
// router.get("/:id/notes/:clientId")
// router.put("/:id/appointments/:appointmentId")
// router.delete("/:id/appointments")
// router.delete("/:id/notes/:noteId")

module.exports = router;