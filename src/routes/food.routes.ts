import { Router } from "express";
import { createFoodController, deleteFoodController, readAllFoodsController } from "../controllers/food.controller";


const foodRoutes: Router = Router()

foodRoutes.post("/:userId", createFoodController )
foodRoutes.get("", readAllFoodsController)
foodRoutes.delete("/:userId/food/:foodId",deleteFoodController )


export default foodRoutes