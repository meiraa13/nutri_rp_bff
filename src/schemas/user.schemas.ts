import { z } from "zod"
import { foodSchema } from "./food.schemas"

const userSchema = z.object({

    id:z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),

})

const userRequestSchema = userSchema.omit({
    id:true,
})

const userResponseSchema = userSchema.omit({
    password:true
}).extend({
    foods: foodSchema.array().optional()
})

const userResponse2Schema = userSchema.omit({
    password:true
})

const allUsersSchema = userResponseSchema.array()

const userUpdateSchema = userRequestSchema.partial()

export { 
    userRequestSchema, 
    userResponseSchema, 
    userSchema, 
    userUpdateSchema, 
    allUsersSchema, 
    userResponse2Schema 
}