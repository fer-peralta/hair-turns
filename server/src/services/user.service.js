import { getApiDao } from "../persistence/index.js";
import { config } from "../config/config.js";

const { UserDaoContainer } = await getApiDao(config.DBTYPE)

export const saveUser = async (data) => {
    return await UserDaoContainer.saveData(data)
}

export const getUsers = async () => {
    return await UserDaoContainer.getAll();
}

export const findUser = async (body) => {
    return await UserDaoContainer.findOne(body)
}