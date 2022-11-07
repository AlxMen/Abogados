const Users = require("../models/user.model")

function getAppointments(req, res) {
    Users.findById(req.params.id)
        .populate('appointment')
        .then(user => res.json(user.appointment.filter(e => !e.done)))
        .catch(err => res.json(err))
}

module.exports = {
    getAppointments
}