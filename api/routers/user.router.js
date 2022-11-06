const router = require('express').Router()

const { 
    addUser,
} = require("../controllers/user.controller")

router.post("/", addUser)
router.get("/:id/citas")
router.get("/:id/notas")
router.get("/:id/citas/:clienteId")
router.get("/:id/clientes")
router.get("/:id/notas/:clienteId")
router.post("/:id/citas")
router.post("/:id/notas")
router.put("/:id/citas/:citaId")
router.delete("/:id/citas")
router.delete("/:id/notas/:notaId")

module.exports = router;