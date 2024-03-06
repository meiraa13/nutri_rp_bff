import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../interfaces/user.interfaces";
import { createUserService } from "../services/user/createUser.service";

async function createUserController(req: Request, res:Response):Promise<Response>{
    const userData:TUserRequest = req.body

    const newUser:TUserResponse = await createUserService(userData)

    return res.status(201).json(newUser)

}