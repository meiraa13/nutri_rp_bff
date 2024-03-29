import {  z } from "zod"
import { userResponse2Schema } from "./user.schemas"


const foodSchema = z.object({
    id: z.string(),
    name: z.string(),
    weight: z.number(),
    side: z.string().optional(),
    weight_side: z.number().optional(),
    insta: z.string().optional(),
    result: z.number(),
    conclusion: z.enum(["baixo", "moderado", "alto"]),
    hipoglycemic: z.boolean(),
    highlight: z.boolean(),
})

const foodRequestSchema = foodSchema.omit({
    id:true,
    conclusion:true
})

const foodCreateSchema = foodSchema.omit({
    id:true
})

const foodResponseSchema = foodSchema.extend({
    user: userResponse2Schema
})

const foodUpdateSchema = foodRequestSchema.partial()

export { foodRequestSchema, foodSchema, foodUpdateSchema, foodResponseSchema, foodCreateSchema}