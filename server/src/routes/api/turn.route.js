import express from "express"
import { getTurnsController, findTurnController, saveTurnController, updateTurnController, deleteTurnController } from "../../controllers/turn.controller.js"

const router = express.Router()

router.get('/', getTurnsController)

router.get('/:id', findTurnController)

router.post('/', saveTurnController)

router.put('/:id', updateTurnController)

router.delete('/:id', deleteTurnController)

// router.get('/:day', (req, res) => {
//     const day = parseInt(req.params.day)
//     res.send({ mensaje: `hola desde dia ${day}` })
// })

export { router as turnRouter }