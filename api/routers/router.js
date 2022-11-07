const router = require("express").Router();

const usersRouter = require("./user.router");
const authRouter = require("./auth.router")
const { authUser } = require('../utils/index')

router.use("/auth", authRouter)
router.use("/users", usersRouter)

router.get('/profile', authUser, (req, res) => {
    res.json(res.locals.user)
})

module.exports = router;