const router = require('express').Router()

const {
    getAllClients,
    getAlluser
} = require("../controllers/user.controller")

const { authUser } = require('../utils')

router.get("/clients",authUser, getAllClients)
router.get("/list",authUser, getAlluser)

module.exports = router;