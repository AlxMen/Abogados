const router = require('express').Router()

const {
    getAllClients
} = require("../controllers/user.controller")

const { authUser } = require('../utils')

router.get("/clients",authUser, getAllClients)

module.exports = router;