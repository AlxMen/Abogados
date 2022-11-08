const router = require('express').Router()

const {
    createAppointment,
    updateOneAppointment,
    getAllAppointmentsOneClient,
    getFutureAppointments,
    getAllAppointments,
    deleteAppointment
} = require("../controllers/appointment.controller")

const { authUser,authLawyer } = require('../utils')


router.get("/client", authUser, getFutureAppointments)
router.get("/:clientId", authUser, authLawyer, getAllAppointmentsOneClient)
router.get("/", authUser, authLawyer, getAllAppointments)
router.post("/", authUser, createAppointment)
router.put("/:appointId", authUser ,authLawyer ,updateOneAppointment)
router.delete("/:appointId", authUser, deleteAppointment)

module.exports = router