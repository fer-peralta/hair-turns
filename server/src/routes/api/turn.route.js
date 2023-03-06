import express from "express"
import { getTurnsController, saveTurnController } from "../../controllers/turn.controller.js"
import { loggerInfo, loggerError, loggerWarn } from "../../logs/logger.js"

const router = express.Router()

router.get('/', async (req, res) => {
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

router.get('/:day', (req, res) => {
    const day = parseInt(req.params.day)
    res.send({ mensaje: `hola desde dia ${day}` })
})

router.post('/', async (req, res) => {
    try {
        const response = await saveTurnController(req.body)
        loggerInfo.info(response)
        res.status(200).json({ data: [response, `Se ha agendado el turno con exito`] })
    } catch (error) {
        loggerError.error(error)
        res.status(400).json({ message: `Hubo un error: ${error}` })
    }
})

router.delete('/:day', (req, res) => {
    const day = parseInt(req.params.day)
    res.send({ mensaje: `turno borrado ${day}` })
})

export { router as turnRouter }