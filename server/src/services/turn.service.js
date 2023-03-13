import { getApiDao } from "../persistence/index.js";
import { config } from "../config/config.js";

const { TurnDaoContainer } = await getApiDao(config.DBTYPE)

export const saveTurn = async (data) => {
    return await TurnDaoContainer.saveData(data)
}

export const getTurns = async () => {
    return await TurnDaoContainer.getAll();
}

export const findTurn = async (id) => {
    return await TurnDaoContainer.getById(id)
}

export const updateTurn = async (id, body) => {
    return await TurnDaoContainer.updateById(id, body)
}

export const deleteTurn = async (id) => {
    return await TurnDaoContainer.deleteById(id)
}