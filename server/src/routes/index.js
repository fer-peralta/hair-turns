import express from "express"
import { getTurnsController, saveTurnController } from "../controllers/turn.controller.js"
import { loggerInfo, loggerError, loggerWarn } from "../logs/logger.js"

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

router.get('/turns', async (req, res) => {
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

router.get('/turns/:day', (req, res) => {
    const day = parseInt(req.params.day)
    res.send({ mensaje: `hola desde dia ${day}` })
})

router.post('/turns', async (req, res) => {
    try {
        const response = await saveTurnController(req.body)
        loggerInfo.info(response)
        res.status(200).json({ data: [response, `Se ha agendado el turno con exito`] })
    } catch (error) {
        loggerError.error(error)
        res.status(400).json({ message: `Hubo un error: ${error}` })
    }
    // res.send({ mensaje: 'Turno sacado con exito' })
})

router.delete('/turns/:day', (req, res) => {
    const day = parseInt(req.params.day)
    res.send({ mensaje: `turno borrado ${day}` })
})

//* 404
router.get('/*', (req, res) => {
    loggerWarn.warn(`No se ha encontrado la ruta solicitada`)
    res.status(404).send('<h1>404! Page not found</h1>');
})

export { router as apiRouter }