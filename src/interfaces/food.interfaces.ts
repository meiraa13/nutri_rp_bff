import { z } from "zod"
import { DeepPartial } from "typeorm"
import { foodCreateSchema, foodRequestSchema, foodSchema, foodUpdateSchema } from "../schemas/food.schemas"

type TFood = z.infer<typeof foodSchema>
type TFoodRequest = z.infer<typeof foodRequestSchema>
type TFoodUpdate = DeepPartial<typeof foodUpdateSchema>
type TFoodCreate = z.infer<typeof foodCreateSchema>

export { TFood, TFoodRequest, TFoodUpdate, TFoodCreate }