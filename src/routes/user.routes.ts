import { Router } from "express";
import { createUserController, deleteUserController, readAllUsersController, updateUserController } from "../controllers/user.controllers";
import { DTOMiddleware } from "../middlewares/DTO.middleware";
import { userRequestSchema } from "../schemas/user.schemas";
import { ensureEmailUniqueMW } from "../middlewares/ensureEmailUnique.middleware";


const userRoutes: Router = Router()

userRoutes.post("", DTOMiddleware(userRequestSchema),ensureEmailUniqueMW, createUserController)
userRoutes.get("", readAllUsersController)
userRoutes.delete("/:id", deleteUserController)
userRoutes.patch("/:id", updateUserController)


export default userRoutes