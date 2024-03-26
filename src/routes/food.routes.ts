import { Router } from "express";
import { createFoodController, deleteFoodController, readAllFoodsController } from "../controllers/food.controller";
import  multer  from "multer"
import { uploadFileController } from "../controllers/test.controller";
import { resolve } from "node:path"

const location = resolve(__dirname,"..","..","tmp")
const storage = multer.diskStorage({
    destination:location
})
const upload = multer({ storage })
const foodRoutes: Router = Router()

foodRoutes.post("/:userId", createFoodController )
foodRoutes.get("", readAllFoodsController)
foodRoutes.delete("/:userId/food/:foodId",deleteFoodController )
foodRoutes.get("/upload",upload.single("file") ,uploadFileController)


export default foodRoutes