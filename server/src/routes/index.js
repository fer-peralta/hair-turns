import express from "express"

const router = express.Router()

router.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
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

//* 404
router.get('/*', (req, res) => {
    res.status(404).send('<h1>404! Page not found</h1>');
})

export { router as apiRouter }