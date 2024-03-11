import { Request, Response } from "express";
import { TLogin } from "../interfaces/login.interfaces";
import { createSessionService } from "../services/login/createSession.service";

async function createSessionController(req: Request, res:Response):Promise<Response>{
    const userData:TLogin = req.body

    const token = await createSessionService(userData)

    return res.json(token)

}

export { createSessionController }