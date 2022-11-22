const Users = require("../models/user.model")

async function getAllClients(req, res) {
    try {
        const users = await Users.findById(res.locals.user.id).populate({path: "clients", select: "-_id -password -__v -role -clients" })
        res.json(users.clients)
    } catch (error) {
        res.json(error)
    }
}

async function getAlluser(req, res) {
    try {
        const users = await Users.find()
        res.json(users)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getAllClients,
    getAlluser
}