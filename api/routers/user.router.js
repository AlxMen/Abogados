const router = require('express').Router()

const { 
    getAppointments
} = require("../controllers/user.controller")

const { authUser,authAdmin } = require('../utils')

router.get("/:id/appointments",authUser, getAppointments)
// router.get("/:id/notes")
// router.get("/:id/appointment/:clientId")
// router.get("/:id/clients")
// router.get("/:id/notes/:clientId")
// router.put("/:id/appointments/:appointmentId")
// router.delete("/:id/appointments")
// router.delete("/:id/notes/:noteId")

module.exports = router;