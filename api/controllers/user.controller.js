const Users = require("../models/user.model")
const bcrypt = require('bcrypt')


function addUser(req, res) {
    console.log(req.body)
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
}

module.exports = {
    addUser,
}