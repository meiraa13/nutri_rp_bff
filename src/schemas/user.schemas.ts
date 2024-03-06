import { z } from "zod"
import { foodSchema } from "./food.schemas"

const userSchema = z.object({

    id:z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    foods: foodSchema.array()

})

const userRequestSchema = userSchema.omit({
    id:true,
    foods:true
})

const userResponseSchema = userSchema.omit({
    password:true
})

const userUpdateSchema = userRequestSchema.partial()

export { userRequestSchema, userResponseSchema, userSchema, userUpdateSchema }