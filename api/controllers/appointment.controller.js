const Appointment = require('../models/appointment.model')
const User = require('../models/user.model')

function createAppointment(req, res) {
    Appointment.create(req.body)
        .then(appoint => {
            User.findById(req.body.client)
                .then(user => {
                    user.appointment.push(appoint._id)
                    user.save()
                })
                .catch(err => res.json(err))
            User.findById(req.body.lawyer)
                .then(user => {
                    user.appointment.push(appoint._id)
                    user.save()
                })
                .catch(err => res.json(err))
            res.json(appoint)
        })
        .catch(err => res.json(err))
}

function updateOneAppointment(req, res) {
    Appointment.findByIdAndUpdate(req.params.appointId, req.body, { new: true })
        .then(appoint => res.json(appoint))
        .catch(err => res.json(err))
}

module.exports = {
    createAppointment,
    updateOneAppointment
}