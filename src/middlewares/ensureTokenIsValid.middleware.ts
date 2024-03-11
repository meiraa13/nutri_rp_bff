import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { verify } from "jsonwebtoken";
import "dotenv/config"

export async function ensureTokenIsValidMW(req:Request, res:Response, next:NextFunction) {
    const auth = req.headers.authorization

    if(!auth){
        throw new AppError("missing bearer token", 401)
    }

    const token = auth.split(" ")[1]

    verify(token, String(process.env.SECRET_KEY), (err:any, decoded:any)=>{
        if(err){
            throw new AppError(err.message, 401)
        }

        res.locals.token = {
            id: decoded.sub,
            name: decoded.userName
        }

        return next()
    })
}