import { Router } from "express";
import { createSessionController } from "../controllers/login.controller";


const loginRoutes: Router = Router()

loginRoutes.post("", createSessionController )


export default loginRoutes