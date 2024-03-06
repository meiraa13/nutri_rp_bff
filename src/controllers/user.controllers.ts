import { Request, Response } from "express";
import { TUserRequest, TUserResponse, TUserUpdate } from "../interfaces/user.interfaces";
import { createUserService } from "../services/user/createUser.service";
import User from "../entities/user.entity";
import { userRepository } from "../data-source";
import { readAllUsersService } from "../services/user/readUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { updateUserService } from "../services/user/updateUser.service";

async function createUserController(req: Request, res:Response):Promise<Response>{
    const userData:TUserRequest = req.body

    const newUser:TUserResponse = await createUserService(userData)

    return res.status(201).json(newUser)

}

async function readAllUsersController(req:Request, res:Response):Promise<Response>{
    const users = await readAllUsersService()

    return res.json(users)
}

async function deleteUserController(req:Request, res:Response):Promise<Response>{
    const userId:string = req.params.id

    await deleteUserService(userId)
    return res.status(204).send()
}

async function updateUserController(req:Request, res:Response):Promise<Response>{
    const userId:string = req.params.id
    const userData:TUserUpdate = req.body

    const updatedUser = await updateUserService(userId, userData)
    return res.json(updatedUser)
}
export { createUserController, readAllUsersController, deleteUserController, updateUserController }