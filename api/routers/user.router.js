const router = require('express').Router()

const {
    getAllClients
} = require("../controllers/user.controller")

const { authUser, authLawyer } = require('../utils')

router.get("/clients",authUser, authLawyer, getAllClients)

module.exports = router;