const Users = require("../models/user.model")

function getFutureAppointments(req, res) {
    Users.findById(req.params.id)
        .populate('appointment')
        .then(user => res.json(user.appointment.filter(e => !e.done)))
        .catch(err => res.json(err))
}

function getAllAppointments(req, res) {
    Users.findById(req.params.id)
        .populate('appointment')
        .then(user => res.json(user.appointment))
        .catch(err => res.json(err))
}

function getNotes(req, res) {
    Users.findById(req.params.id)
        .populate('register')
        .then(user => res.json(user.register))
        .catch(err => res.json(err))
}

module.exports = {
    getFutureAppointments,
    getAllAppointments,
    getNotes
}