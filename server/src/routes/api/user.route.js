import express from "express";

import { findUserController, getUsersController, saveUserController, updateUserController, deleteUserController } from "../../controllers/user.controller.js"

const router = express.Router()

router.get('/', getUsersController)

router.get('/:userId', findUserController)

router.post('/', saveUserController)

router.put('/:userId', updateUserController)

router.delete('/:userId', deleteUserController)

export { router as userRouter }