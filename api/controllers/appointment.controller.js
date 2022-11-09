const Appointment = require('../models/appointment.model')
const User = require('../models/user.model')

async function createAppointment(req, res) {
    try {
        
        const lawyerHasDate = await Appointment.exists({ 
            lawyer: req.body.lawyer, 
            date: req.body.date, 
            hour: req.body.hour 
        })

        const clientHasDate = await Appointment.exists({ 
            client: req.body.client, 
            date: req.body.date, 
            hour: req.body.hour 
        })

        if (lawyerHasDate || clientHasDate) {
            return res.status(400).json({ msg: 'No se puede crear cita, duplicada' })
        }

        const appoint = await Appointment.create(req.body)        
        res.json(appoint)
        
    } catch (error) {
        res.json(error)
    }
}

 async function updateOneAppointment(req, res) {
    try {
        const appoint = await Appointment.findByIdAndUpdate(req.params.appointId, req.body, { new: true })
        res.json(appoint)
    } catch (error) {
        res.json(error)
    }   
}

async function getAllAppointmentsOneClient(req, res) {
    try {
        const appoint = await Appointment.find({lawyer: res.locals.user.id, client: req.params.clientId})
        res.json(appoint)
    } catch (error) {
        res.json(error)
    }
}

async function getFutureAppointments(req, res) {
    try {
        const appoint = await Appointment.find({client: res.locals.user.id})
        res.json(appoint.filter(e => !e.done))
    }catch(err){
        res.json(err)
    }
}

async function getAllAppointments(req, res) {
    try {
        const appoint = await Appointment.find({lawyer: res.locals.user.id})
        res.json(appoint)
    } catch (error) {
        res.json(error)
    }
}

async function deleteAppointment(req, res) {
    try {
        const appoint = await Appointment.findByIdAndDelete(req.params.appointId)
        res.json(appoint)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    createAppointment,
    updateOneAppointment,
    getAllAppointmentsOneClient,
    getFutureAppointments,
    getAllAppointments,
    deleteAppointment
}