import { NextFunction, Request, Response } from "express";
import { TUserRequest } from "../interfaces/user.interfaces";
import User from "../entities/user.entity";
import { userRepository } from "../data-source";
import { AppError } from "../error";

export async function ensureEmailUniqueMW(req:Request, res:Response, next:NextFunction):Promise<Response | void>{
    const userData:TUserRequest = req.body

    const userFound: User | null = await userRepository.findOne({
        where:{
            email:userData.email
        }
    })

    if(userFound){
        throw new AppError("Email already exists", 409)
    }

    return next()
}