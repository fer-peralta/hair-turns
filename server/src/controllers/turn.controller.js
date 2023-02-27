import { getTurns, findTurn, saveTurn } from "../services/turn.service.js";

export const getTurnsController = async (req, res) => {
    try {
        const response = await getTurns();
        return ({ data: response })
    } catch (error) {
        return { message: `Hubo un error ${error}` }
    }
}

export const saveTurnController = async (req, res) => {
    try {
        const response = await saveTurn(req.body);
        return ({ data: response })
    } catch (error) {
        return { message: `Hubo un error ${error}` }
    }
}

export const findTurnController = async (req, res) => {
    try {
        const response = await findTurn(req.body);
        return ({ data: response })
    } catch (error) {
        return { message: `Hubo un error ${error}` }
    }
}