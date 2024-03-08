import { Request, Response } from "express";
import { createFoodService } from "../services/food/createFood.service";
import { TFoodRequest } from "../interfaces/food.interfaces";
import { readAllFoodsService } from "../services/food/readFood.service";
import { deleteFoodService } from "../services/food/deleteFood.service";

async function createFoodController(req:Request, res:Response):Promise<Response> {
    const { userId } = req.params
    const foodData:TFoodRequest = req.body

    const newFood = await createFoodService(foodData, userId)

    return res.status(201).json(newFood)
}


async function readAllFoodsController(req:Request, res:Response):Promise<Response>{
    const users = await readAllFoodsService()

    return res.json(users)
}


async function deleteFoodController(req:Request, res:Response):Promise<Response>{
    const { userId, foodId} = req.params

    await deleteFoodService(userId, foodId)
    return res.status(204).send()
}


export { createFoodController, readAllFoodsController, deleteFoodController }