import express from "express"
import { getTurnsController, saveTurnController } from "../controllers/turn.controller.js"
import { loggerInfo, loggerError, loggerWarn } from "../logs/logger.js"
import { turnRouter } from "./api/turn.route.js"
import { userRouter } from "./api/user.route.js"

const router = express.Router()

//* Turns

// rutas:
// home

// turnos:
//         ver todos los turnos
//         ver un turno
//         sacar un turno
//         modificar un turno
//         cancelar un turno

// usuarios:
//         ver perfil
//         modificar perfil
//         administracion
router.use("/users", userRouter)

router.use("/turns", turnRouter)

//* 404
router.get('/*', (req, res) => {
    loggerWarn.warn(`No se ha encontrado la ruta solicitada`)
    res.status(404).send('<h1>404! Page not found</h1>');
})

export { router as apiRouter }