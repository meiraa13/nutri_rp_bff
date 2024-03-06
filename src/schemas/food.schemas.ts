import { z } from "zod"

const foodSchema = z.object({

    id: z.string(),
    name: z.string(),
    weight: z.number(),
    consumption_mode: z.string(),
    conclusion: z.enum(["baixo", "moderado", "alto"]),
    hypoglycemic: z.boolean(),
    highlight: z.boolean()
})

const foodRequestSchema = foodSchema.omit({
    id:true
})

const foodUpdateSchema = foodRequestSchema.partial()

export { foodRequestSchema, foodSchema, foodUpdateSchema}