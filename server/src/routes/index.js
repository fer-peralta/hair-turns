import express from "express"
import { getTurnsController } from "../controllers/turn.controller.js"
import { loggerInfo, loggerError, loggerWarn } from "../logs/logger.js"

const router = express.Router()

// router.get('/', (req, res) => {
//     res.send({ mensaje: 'hola mundo' })
// })

router.get("/", async (req, res) => {
    try {
        const response = await getTurnsController()
        if (response) {
            res.status(200).json(response)
        }
        else {
            res.status(200).json("No hay nada")
        }
    } catch (error) {
        loggerError.error(error)
        res.status(400).json({ message: `Hubo un error ${error}` })
    }
})

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

router.get('/turns', (req, res) => {
    res.send({ mensaje: 'hola desde turnos' })
})

router.get('/turns/:day', (req, res) => {
    const day = parseInt(req.params.day)
    res.send({ mensaje: `hola desde dia ${day}` })
})

router.post('/turns', (req, res) => {
    res.send({ mensaje: 'Turno sacado con exito' })
})

router.delete('/turns/:day', (req, res) => {
    const day = parseInt(req.params.day)
    res.send({ mensaje: `turno borrado ${day}` })
})

//* 404
router.get('/*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
})

export { router as apiRouter }