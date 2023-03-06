import { getUsers, findUser, saveUser } from "../services/user.service.js";

export const getUsersController = async (req, res) => {
    try {
        const response = await getUsers();
        return response ? ({ data: response }) : { message: `No hay usuarios.` }
    } catch (error) {
        return { message: `Hubo un error ${error}` }
    }
}

export const saveUserController = async (req, res) => {
    try {
        const response = await saveUser(req);
        return ({ data: response })
    } catch (error) {
        return { message: `Hubo un error ${error}` }
    }
}

export const findUserController = async (req, res) => {
    try {
        const response = await findUser(req.body);
        return ({ data: response })
    } catch (error) {
        return { message: `Hubo un error ${error}` }
    }
}