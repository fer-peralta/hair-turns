import { getUsers, findUser, saveUser, updateUser, deleteUser } from "../services/user.service.js";
import { loggerError, loggerInfo } from "../logs/logger.js";

export const getUsersController = async (req, res) => {
    try {
        const response = await getUsers()
        response ? res.status(200).json(response) : res.status(200).json("No hay usuarios ingresados")
    } catch (error) {
        loggerError.error(error)
        res.status(400).json({ message: `Hubo un error ${error}` })
    }
}

export const saveUserController = async (req, res) => {
    try {
        const response = await saveUser(req.body)
        loggerInfo.info(response)
        res.status(200).json({ data: response })
    } catch (error) {
        loggerError.error(error)
        res.status(400).json({ message: `Hubo un error: ${error}` })
    }
}

export const findUserController = async (req, res) => {
    try {
        const response = await findUser(req.params.userId);
        response ? res.status(200).json(response) : res.status(200).json("No se encontró el usuario")
    } catch (error) {
        loggerError.error(error)
        res.status(400).json({ message: `Hubo un error ${error}` })
    }
}

export const updateUserController = async (req, res) => {
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
        const response = await updateUser(req.params.userId, req.body);
        res.status(200).send({ message: `Se ha actualizado el turno con exito`, data: response })
    } catch (error) {
        res.status(400).send({ message: `Hubo un error ${error}` })
    }
}

export const deleteUserController = async (req, res) => {
    try {
        const response = await deleteUser(req.params.userId);
        res.status(200).json({ data: response })
    } catch (error) {
        res.status(400).json({ message: `Hubo un error ${error}` })
    }
}