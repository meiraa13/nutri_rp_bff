import { z } from "zod"
import { DeepPartial } from "typeorm"
import { foodRequestSchema, foodSchema, foodUpdateSchema } from "../schemas/food.schemas"

type TFood = z.infer<typeof foodSchema>
type TFoodRequest = z.infer<typeof foodRequestSchema>
type TFoodUpdate = DeepPartial<typeof foodUpdateSchema>

export { TFood, TFoodRequest, TFoodUpdate }