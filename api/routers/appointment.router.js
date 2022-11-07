const router = require('express').Router()

const {
    createAppointment,
    updateOneAppointment
} = require("../controllers/appointment.controller")

const { authUser,authAdmin } = require('../utils')

router.post("/", authUser, createAppointment)
router.put("/:appointId", authUser ,authAdmin ,updateOneAppointment)

module.exports = router