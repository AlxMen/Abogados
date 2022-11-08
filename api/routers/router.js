const router = require("express").Router();

const usersRouter = require("./user.router");
const authRouter = require("./auth.router")
const appointRouter = require("./appointment.router")
const noteRouter = require("./note.router")
const { authUser } = require('../utils')

router.use("/auth", authRouter)
router.use("/users", usersRouter)
router.use("/appointments", appointRouter)
router.use("/notes", noteRouter)

router.get('/profile', authUser, (req, res) => {
    res.json(res.locals.user)
})

module.exports = router;