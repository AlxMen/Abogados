const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')

function authUser(req, res, next) {
  if (!req.headers.authorization) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    let token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }

      UserModel.findOne({ email: token.email })
        .then(user => {
          res.locals.user = user
          next()
        })
    })
  }
}

function authLawyer(req, res, next) {
  if(res.locals.user.role !== "admin"){
    return res.status(401).send("User not authorized")
  }else {
    next()
  }
}

module.exports = {
  authUser,
  authLawyer
}