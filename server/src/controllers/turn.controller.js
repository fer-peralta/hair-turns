import { getTurns, findTurn, updateTurn, saveTurn, deleteTurn } from "../services/turn.service.js";

export const getTurnsController = async (req, res) => {
    try {
        const response = await getTurns();
        response ? res.status(200).send({ data: response }) : res.status(200).send({ message: `No hay turnos` })
    } catch (error) {
        res.status(400).send({ message: `Hubo un error ${error}` })
    }
}

export const saveTurnController = async (req, res) => {
    try {
        const response = await saveTurn(req.body);
        res.status(200).send({ data: response })
    } catch (error) {
        res.status(400).send({ message: `Hubo un error ${error}` })
    }
}

export const findTurnController = async (req, res) => {
    try {
        const response = await findTurn(req.params.id);
        res.status(200).json({ data: response })
    } catch (error) {
        res.status(400).json({ message: `Hubo un error ${error}` })
    }
}

export const updateTurnController = async (req, res) => {
    // const {id} = params
    // const modificacion = body
    try {
        // const existe = await getProdById(id)
        
        // if (!existe){
        //     return res.status(404).send({ message: 'Error el producto no existe' })
        // } else{
        //     const prod = await updateProd(id,modificacion)
        //     return res.status(200).send(prod)
        // }
        const response = await updateTurn(req.params.id,req.body);
        res.status(200).send({ data: [response, `Se ha actualizado el turno con exito`] })
    } catch (error) {
        res.status(400).send({ message: `Hubo un error ${error}` })
    }
}

export const deleteTurnController = async (req, res) => {
    try {
        const response = await deleteTurn(req.params.id);
        res.status(200).json({ data: response })
    } catch (error) {
        res.status(400).json({ message: `Hubo un error ${error}` })
    }
}