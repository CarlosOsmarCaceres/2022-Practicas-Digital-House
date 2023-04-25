const express = require("express") // requiero express
const router = express.Router()    //

// Requerimos el controlador
const controller = require("../controllers/mainController.js")
const adminMiddleware = require("../middlwares/userMiddleware") //requerimos el Middlewares


router.get("/", controller.index)
router.get("/admin", adminMiddleware, controller.admin) // entre medio ponemos adminMiddleware para hacer uso

module.exports = router;