import express from "express";

import { getUsersController, saveUserController } from "../../controllers/user.controller.js"
import { loggerInfo, loggerError, loggerWarn } from "../../logs/logger.js"

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const response = await getUsersController()
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

router.post('/', async (req, res) => {
    try {
        const response = await saveUserController(req.body)
        loggerInfo.info(response)
        res.status(200).json({ data: [response, `Usuario Encontrado`] })
    } catch (error) {
        loggerError.error(error)
        res.status(400).json({ message: `Hubo un error: ${error}` })
    }
})


export { router as userRouter }