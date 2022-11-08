const Users = require("../models/user.model")

async function getAllClients(req, res) {
    try {
        const users = await Users.findById(res.locals.user.id).populate("clients")
        res.json(users.clients)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getAllClients
}