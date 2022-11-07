const appointment = require('../models/appointment.model')

function createAppointment(req, res) {
    appointment.create(req.body)
        .then(appoint => res.json(appoint))
        .catch(err => res.json(err))
}
// 
function updateOneAppointment(req, res) {
    appointment.findByIdAndUpdate(req.params.appointId, req.body, {new: true})
        .then(appoint => res.json(appoint))
        .catch(err => res.json(err))
}

module.exports = {
    createAppointment,
    updateOneAppointment
}